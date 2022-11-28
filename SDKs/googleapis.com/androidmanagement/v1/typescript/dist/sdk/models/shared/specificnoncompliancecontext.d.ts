import { SpeakeasyBase } from "../../../internal/utils";
import { OncWifiContext } from "./oncwificontext";
import { PasswordPoliciesContext } from "./passwordpoliciescontext";
/**
 * Additional context for SpecificNonComplianceReason.
**/
export declare class SpecificNonComplianceContext extends SpeakeasyBase {
    oncWifiContext?: OncWifiContext;
    passwordPoliciesContext?: PasswordPoliciesContext;
}
