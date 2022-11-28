import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsIamUserPolicy
/** 
 * Information about an inline policy that is embedded in the user.
**/
export class AwsIamUserPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName?: string;
}
