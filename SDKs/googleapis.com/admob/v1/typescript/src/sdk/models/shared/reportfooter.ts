import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportWarning } from "./reportwarning";


// ReportFooter
/** 
 * Groups data available after report generation, for example, warnings and row counts. Always sent as the last message in the stream response.
**/
export class ReportFooter extends SpeakeasyBase {
  @Metadata({ data: "json, name=matchingRowCount" })
  matchingRowCount?: string;

  @Metadata({ data: "json, name=warnings", elemType: shared.ReportWarning })
  warnings?: ReportWarning[];
}
