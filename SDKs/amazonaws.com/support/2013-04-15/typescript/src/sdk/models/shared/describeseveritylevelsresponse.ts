import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SeverityLevel } from "./severitylevel";


// DescribeSeverityLevelsResponse
/** 
 * The list of severity levels returned by the <a>DescribeSeverityLevels</a> operation.
**/
export class DescribeSeverityLevelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=severityLevels", elemType: shared.SeverityLevel })
  severityLevels?: SeverityLevel[];
}
