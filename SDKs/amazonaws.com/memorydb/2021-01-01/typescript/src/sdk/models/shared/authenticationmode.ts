import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InputAuthenticationTypeEnum } from "./inputauthenticationtypeenum";


// AuthenticationMode
/** 
 * Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.
**/
export class AuthenticationMode extends SpeakeasyBase {
  @Metadata({ data: "json, name=Passwords" })
  passwords?: string[];

  @Metadata({ data: "json, name=Type" })
  type?: InputAuthenticationTypeEnum;
}
