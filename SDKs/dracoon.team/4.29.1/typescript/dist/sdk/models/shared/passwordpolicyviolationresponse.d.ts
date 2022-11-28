import { SpeakeasyBase } from "../../../internal/utils";
import { ViolatedPasswordPolicy } from "./violatedpasswordpolicy";
/**
 * List of violated password policies
**/
export declare class PasswordPolicyViolationResponse extends SpeakeasyBase {
    code: number;
    debugInfo?: string;
    errorCode?: number;
    message: string;
    violatedPasswordPolicies?: ViolatedPasswordPolicy[];
}
