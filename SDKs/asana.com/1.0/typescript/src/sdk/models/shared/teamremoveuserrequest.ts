import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TeamRemoveUserRequest
/** 
 * A user identification object for specification with the addUser/removeUser endpoints.
**/
export class TeamRemoveUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=user" })
  user?: string;
}
