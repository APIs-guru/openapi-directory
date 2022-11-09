import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReportHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class Report extends SpeakeasyBase {
  @Metadata({ data: "json, name=averages" })
  averages?: string[];

  @Metadata({ data: "json, name=headers", elemType: shared.ReportHeaders })
  headers?: ReportHeaders[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=rows" })
  rows?: string[][];

  @Metadata({ data: "json, name=totalMatchedRows" })
  totalMatchedRows?: string;

  @Metadata({ data: "json, name=totals" })
  totals?: string[];

  @Metadata({ data: "json, name=warnings" })
  warnings?: string[];
}
