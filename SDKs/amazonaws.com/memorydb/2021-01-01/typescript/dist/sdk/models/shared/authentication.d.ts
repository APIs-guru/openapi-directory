import { SpeakeasyBase } from "../../../internal/utils";
import { AuthenticationTypeEnum } from "./authenticationtypeenum";
/**
 * Denotes the user's authentication properties, such as whether it requires a password to authenticate. Used in output responses.
**/
export declare class Authentication extends SpeakeasyBase {
    passwordCount?: number;
    type?: AuthenticationTypeEnum;
}
