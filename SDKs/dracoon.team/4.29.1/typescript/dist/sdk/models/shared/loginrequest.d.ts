import { SpeakeasyBase } from "../../../internal/utils";
export declare enum LoginRequestAuthTypeEnum {
    Basic = "basic",
    ActiveDirectory = "active_directory",
    Radius = "radius"
}
/**
 * Request model for performing an authentication
**/
export declare class LoginRequest extends SpeakeasyBase {
    authType?: LoginRequestAuthTypeEnum;
    language?: string;
    login?: string;
    password: string;
    state?: string;
    token?: string;
    userName?: string;
}
