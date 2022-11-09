import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ViolatedPasswordPolicy } from "./violatedpasswordpolicy";


// PasswordPolicyViolationResponse
/** 
 * List of violated password policies
**/
export class PasswordPolicyViolationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code: number;

  @Metadata({ data: "json, name=debugInfo" })
  debugInfo?: string;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: number;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=violatedPasswordPolicies", elemType: shared.ViolatedPasswordPolicy })
  violatedPasswordPolicies?: ViolatedPasswordPolicy[];
}
