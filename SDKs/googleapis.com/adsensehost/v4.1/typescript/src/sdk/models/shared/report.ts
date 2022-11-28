import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class Report extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averages" })
  averages?: string[];

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: ReportHeaders })
  headers?: ReportHeaders[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=rows" })
  rows?: string[][];

  @SpeakeasyMetadata({ data: "json, name=totalMatchedRows" })
  totalMatchedRows?: string;

  @SpeakeasyMetadata({ data: "json, name=totals" })
  totals?: string[];

  @SpeakeasyMetadata({ data: "json, name=warnings" })
  warnings?: string[];
}
