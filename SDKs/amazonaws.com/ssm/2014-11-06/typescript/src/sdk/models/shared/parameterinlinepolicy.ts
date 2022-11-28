import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ParameterInlinePolicy
/** 
 * One or more policies assigned to a parameter.
**/
export class ParameterInlinePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyStatus" })
  policyStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyText" })
  policyText?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyType" })
  policyType?: string;
}
