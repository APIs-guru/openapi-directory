import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsIamGroupPolicy
/** 
 * A managed policy that is attached to the IAM group.
**/
export class AwsIamGroupPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyName" })
  policyName?: string;
}
