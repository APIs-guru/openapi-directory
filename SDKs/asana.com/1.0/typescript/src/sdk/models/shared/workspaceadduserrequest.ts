import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WorkspaceAddUserRequest
/** 
 * A user identification object for specification with the addUser/removeUser endpoints.
**/
export class WorkspaceAddUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
