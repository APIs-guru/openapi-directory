import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ParameterInlinePolicy
/** 
 * One or more policies assigned to a parameter.
**/
export class ParameterInlinePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyStatus" })
  policyStatus?: string;

  @Metadata({ data: "json, name=PolicyText" })
  policyText?: string;

  @Metadata({ data: "json, name=PolicyType" })
  policyType?: string;
}
