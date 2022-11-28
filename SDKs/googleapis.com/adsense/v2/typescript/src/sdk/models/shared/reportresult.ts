import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Row } from "./row";
import { Date } from "./date";
import { Header } from "./header";



// ReportResult
/** 
 * Result of a generated report.
**/
export class ReportResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=averages" })
  averages?: Row;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: Header })
  headers?: Header[];

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: Row })
  rows?: Row[];

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=totalMatchedRows" })
  totalMatchedRows?: string;

  @SpeakeasyMetadata({ data: "json, name=totals" })
  totals?: Row;

  @SpeakeasyMetadata({ data: "json, name=warnings" })
  warnings?: string[];
}
