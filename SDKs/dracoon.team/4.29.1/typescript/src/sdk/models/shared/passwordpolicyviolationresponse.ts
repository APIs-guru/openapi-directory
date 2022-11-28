import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ViolatedPasswordPolicy } from "./violatedpasswordpolicy";



// PasswordPolicyViolationResponse
/** 
 * List of violated password policies
**/
export class PasswordPolicyViolationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code: number;

  @SpeakeasyMetadata({ data: "json, name=debugInfo" })
  debugInfo?: string;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: number;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=violatedPasswordPolicies", elemType: ViolatedPasswordPolicy })
  violatedPasswordPolicies?: ViolatedPasswordPolicy[];
}
