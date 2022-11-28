import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InputAuthenticationTypeEnum } from "./inputauthenticationtypeenum";



// AuthenticationMode
/** 
 * Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.
**/
export class AuthenticationMode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Passwords" })
  passwords?: string[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: InputAuthenticationTypeEnum;
}
