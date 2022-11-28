import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SeverityLevel } from "./severitylevel";



// DescribeSeverityLevelsResponse
/** 
 * The list of severity levels returned by the <a>DescribeSeverityLevels</a> operation.
**/
export class DescribeSeverityLevelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=severityLevels", elemType: SeverityLevel })
  severityLevels?: SeverityLevel[];
}
