import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";


// Authentication
/** 
 * Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.
**/
export class Authentication extends SpeakeasyBase {
  @Metadata({ data: "json, name=PasswordCount" })
  passwordCount?: number;

  @Metadata({ data: "json, name=Type" })
  type?: AuthenticationTypeEnum;
}
