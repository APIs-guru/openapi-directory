import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";



// Authentication
/** 
 * Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.
**/
export class Authentication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PasswordCount" })
  passwordCount?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: AuthenticationTypeEnum;
}
