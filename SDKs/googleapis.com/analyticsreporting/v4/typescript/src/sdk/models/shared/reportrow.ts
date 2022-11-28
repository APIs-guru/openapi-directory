import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateRangeValues } from "./daterangevalues";



// ReportRow
/** 
 * A row in the report.
**/
export class ReportRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=metrics", elemType: DateRangeValues })
  metrics?: DateRangeValues[];
}
