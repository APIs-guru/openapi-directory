import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DirectoryChromeosdevicesIssueCommandResponse
/** 
 * A response for issuing a command.
**/
export class DirectoryChromeosdevicesIssueCommandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commandId" })
  commandId?: string;
}
