import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartRequest
/** 
 * Information used to start a WorkSpace.
**/
export class StartRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=WorkspaceId" })
  workspaceId?: string;
}
