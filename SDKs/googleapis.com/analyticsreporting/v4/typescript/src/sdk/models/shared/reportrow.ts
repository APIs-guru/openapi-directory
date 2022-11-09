import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DateRangeValues } from "./daterangevalues";


// ReportRow
/** 
 * A row in the report.
**/
export class ReportRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @Metadata({ data: "json, name=metrics", elemType: shared.DateRangeValues })
  metrics?: DateRangeValues[];
}
