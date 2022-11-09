import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsIamAttachedManagedPolicy
/** 
 * A managed policy that is attached to an IAM principal.
**/
export class AwsIamAttachedManagedPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyArn" })
  policyArn?: string;

  @Metadata({ data: "json, name=PolicyName" })
  policyName?: string;
}
