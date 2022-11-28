import { SpeakeasyBase } from "../../../internal/utils";
import { LoginPasswordPolicies } from "./loginpasswordpolicies";
/**
 * Password reset information
**/
export declare class ResetPasswordTokenValidateResponse extends SpeakeasyBase {
    allowSystemGlobalWeakPassword?: boolean;
    firstName: string;
    gender?: string;
    lastName: string;
    loginPasswordPolicies?: LoginPasswordPolicies;
    title?: string;
}
