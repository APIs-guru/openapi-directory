import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsIamGroupPolicy
/** 
 * A managed policy that is attached to the IAM group.
**/
export class AwsIamGroupPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName?: string;
}
