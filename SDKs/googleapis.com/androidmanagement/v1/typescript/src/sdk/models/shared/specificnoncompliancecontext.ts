import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OncWifiContext } from "./oncwificontext";
import { PasswordPoliciesContext } from "./passwordpoliciescontext";


// SpecificNonComplianceContext
/** 
 * Additional context for SpecificNonComplianceReason.
**/
export class SpecificNonComplianceContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=oncWifiContext" })
  oncWifiContext?: OncWifiContext;

  @Metadata({ data: "json, name=passwordPoliciesContext" })
  passwordPoliciesContext?: PasswordPoliciesContext;
}
