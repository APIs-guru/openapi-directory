import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StopRequest
/** 
 * Describes the information used to stop a WorkSpace.
**/
export class StopRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkspaceId" })
  workspaceId?: string;
}
