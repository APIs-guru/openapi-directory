import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsIamRolePolicy
/** 
 * An inline policy that is embedded in the role.
**/
export class AwsIamRolePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=PolicyName" })
  policyName?: string;
}
