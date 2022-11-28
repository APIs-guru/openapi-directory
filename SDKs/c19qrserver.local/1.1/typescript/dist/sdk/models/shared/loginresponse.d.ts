import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Payload of successful login
**/
export declare class LoginResponse extends SpeakeasyBase {
    admin?: boolean;
    loginId?: number;
    name?: string;
    readOnly?: boolean;
    token?: string;
}
