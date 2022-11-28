import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsIamAttachedManagedPolicy
/** 
 * A managed policy that is attached to an IAM principal.
**/
export class AwsIamAttachedManagedPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyArn" })
  policyArn?: string;

  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName?: string;
}
