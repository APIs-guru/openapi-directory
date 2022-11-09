import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateUserResponse
/** 
 *  <code>UpdateUserResponse</code> returns the user name and identifier for the request to update a user's properties.
**/
export class UpdateUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServerId" })
  serverId: string;

  @Metadata({ data: "json, name=UserName" })
  userName: string;
}
