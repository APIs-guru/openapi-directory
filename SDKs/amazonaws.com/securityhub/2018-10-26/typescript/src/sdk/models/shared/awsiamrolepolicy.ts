import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsIamRolePolicy
/** 
 * An inline policy that is embedded in the role.
**/
export class AwsIamRolePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PolicyName" })
  policyName?: string;
}
