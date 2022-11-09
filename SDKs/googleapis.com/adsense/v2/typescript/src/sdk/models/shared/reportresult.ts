import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Row } from "./row";
import { Date } from "./date";
import { Header } from "./header";
import { Row } from "./row";
import { Date } from "./date";
import { Row } from "./row";


// ReportResult
/** 
 * Result of a generated report.
**/
export class ReportResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=averages" })
  averages?: Row;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=headers", elemType: shared.Header })
  headers?: Header[];

  @Metadata({ data: "json, name=rows", elemType: shared.Row })
  rows?: Row[];

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=totalMatchedRows" })
  totalMatchedRows?: string;

  @Metadata({ data: "json, name=totals" })
  totals?: Row;

  @Metadata({ data: "json, name=warnings" })
  warnings?: string[];
}
