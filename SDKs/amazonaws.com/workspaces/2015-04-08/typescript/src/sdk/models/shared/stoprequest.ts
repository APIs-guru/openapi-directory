import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StopRequest
/** 
 * Describes the information used to stop a WorkSpace.
**/
export class StopRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkspaceId" })
  workspaceId?: string;
}
