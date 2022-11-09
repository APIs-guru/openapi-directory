import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserInfo
/** 
 * Information about a user.
**/
export class UserInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}
