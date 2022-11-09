import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TeamAddUserRequest
/** 
 * A user identification object for specification with the addUser/removeUser endpoints.
**/
export class TeamAddUserRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=user" })
  user?: string;
}
