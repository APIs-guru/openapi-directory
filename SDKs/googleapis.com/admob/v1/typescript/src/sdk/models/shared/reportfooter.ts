import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportWarning } from "./reportwarning";



// ReportFooter
/** 
 * Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response.
**/
export class ReportFooter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=matchingRowCount" })
  matchingRowCount?: string;

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: ReportWarning })
  warnings?: ReportWarning[];
}
