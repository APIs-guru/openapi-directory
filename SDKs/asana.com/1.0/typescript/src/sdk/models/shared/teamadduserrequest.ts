import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TeamAddUserRequest
/** 
 * A user identification object for specification with the addUser/removeUser endpoints.
**/
export class TeamAddUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
