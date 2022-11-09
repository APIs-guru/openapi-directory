import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsIamUserPolicy
/** 
 * Information about an inline policy that is embedded in the user.
**/
export class AwsIamUserPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyName" })
  policyName?: string;
}
