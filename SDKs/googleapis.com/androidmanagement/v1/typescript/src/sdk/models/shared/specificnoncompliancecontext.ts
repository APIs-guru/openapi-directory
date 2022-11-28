import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OncWifiContext } from "./oncwificontext";
import { PasswordPoliciesContext } from "./passwordpoliciescontext";



// SpecificNonComplianceContext
/** 
 * Additional context for SpecificNonComplianceReason.
**/
export class SpecificNonComplianceContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=oncWifiContext" })
  oncWifiContext?: OncWifiContext;

  @SpeakeasyMetadata({ data: "json, name=passwordPoliciesContext" })
  passwordPoliciesContext?: PasswordPoliciesContext;
}
