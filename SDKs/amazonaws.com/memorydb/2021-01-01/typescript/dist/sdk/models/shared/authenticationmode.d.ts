import { SpeakeasyBase } from "../../../internal/utils";
import { InputAuthenticationTypeEnum } from "./inputauthenticationtypeenum";
/**
 * Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.
**/
export declare class AuthenticationMode extends SpeakeasyBase {
    passwords?: string[];
    type?: InputAuthenticationTypeEnum;
}
