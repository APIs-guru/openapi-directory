import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WorkspaceAddUserRequest
/** 
 * A user identification object for specification with the addUser/removeUser endpoints.
**/
export class WorkspaceAddUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=user" })
  user?: string;
}
