import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserInfo
/** 
 * Information about a user.
**/
export class UserInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}
