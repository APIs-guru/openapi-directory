import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkspaceRemoveUserRequest
/** 
 * A user identification object for specification with the addUser/removeUser endpoints.
**/
export class WorkspaceRemoveUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
