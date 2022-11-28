import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TeamRemoveUserRequest
/** 
 * A user identification object for specification with the addUser/removeUser endpoints.
**/
export class TeamRemoveUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: string;
}
