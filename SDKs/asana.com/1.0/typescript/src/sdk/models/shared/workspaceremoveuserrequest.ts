import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkspaceRemoveUserRequest
/** 
 * A user identification object for specification with the addUser/removeUser endpoints.
**/
export class WorkspaceRemoveUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=user" })
  user?: string;
}
