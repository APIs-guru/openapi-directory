import { SpeakeasyBase } from "../../../internal/utils";
import { AuthSchemeEnum } from "./authschemeenum";
import { IamAuthModeEnum } from "./iamauthmodeenum";
/**
 * Returns the details of authentication used by a proxy to log in as a specific database user.
**/
export declare class UserAuthConfigInfo extends SpeakeasyBase {
    authScheme?: AuthSchemeEnum;
    description?: string;
    iamAuth?: IamAuthModeEnum;
    secretArn?: string;
    userName?: string;
}
