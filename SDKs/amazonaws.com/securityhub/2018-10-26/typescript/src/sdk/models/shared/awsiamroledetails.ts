import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsIamAttachedManagedPolicy } from "./awsiamattachedmanagedpolicy";
import { AwsIamInstanceProfile } from "./awsiaminstanceprofile";
import { AwsIamPermissionsBoundary } from "./awsiampermissionsboundary";
import { AwsIamRolePolicy } from "./awsiamrolepolicy";



// AwsIamRoleDetails
/** 
 * Contains information about an IAM role, including all of the role's policies.
**/
export class AwsIamRoleDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssumeRolePolicyDocument" })
  assumeRolePolicyDocument?: string;

  @SpeakeasyMetadata({ data: "json, name=AttachedManagedPolicies", elemType: AwsIamAttachedManagedPolicy })
  attachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  @SpeakeasyMetadata({ data: "json, name=CreateDate" })
  createDate?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceProfileList", elemType: AwsIamInstanceProfile })
  instanceProfileList?: AwsIamInstanceProfile[];

  @SpeakeasyMetadata({ data: "json, name=MaxSessionDuration" })
  maxSessionDuration?: number;

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionsBoundary" })
  permissionsBoundary?: AwsIamPermissionsBoundary;

  @SpeakeasyMetadata({ data: "json, name=RoleId" })
  roleId?: string;

  @SpeakeasyMetadata({ data: "json, name=RoleName" })
  roleName?: string;

  @SpeakeasyMetadata({ data: "json, name=RolePolicyList", elemType: AwsIamRolePolicy })
  rolePolicyList?: AwsIamRolePolicy[];
}
