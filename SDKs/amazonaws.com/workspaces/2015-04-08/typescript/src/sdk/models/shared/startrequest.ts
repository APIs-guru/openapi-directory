import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartRequest
/** 
 * Information used to start a WorkSpace.
**/
export class StartRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=WorkspaceId" })
  workspaceId?: string;
}
