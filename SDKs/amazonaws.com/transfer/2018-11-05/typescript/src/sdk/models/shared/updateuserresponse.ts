import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateUserResponse
/** 
 *  <code>UpdateUserResponse</code> returns the user name and identifier for the request to update a user's properties.
**/
export class UpdateUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName: string;
}
