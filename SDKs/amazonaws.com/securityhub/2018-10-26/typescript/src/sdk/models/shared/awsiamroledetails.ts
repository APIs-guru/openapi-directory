import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsIamAttachedManagedPolicy } from "./awsiamattachedmanagedpolicy";
import { AwsIamInstanceProfile } from "./awsiaminstanceprofile";
import { AwsIamPermissionsBoundary } from "./awsiampermissionsboundary";
import { AwsIamRolePolicy } from "./awsiamrolepolicy";


// AwsIamRoleDetails
/** 
 * Contains information about an IAM role, including all of the role's policies.
**/
export class AwsIamRoleDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssumeRolePolicyDocument" })
  assumeRolePolicyDocument?: string;

  @Metadata({ data: "json, name=AttachedManagedPolicies", elemType: shared.AwsIamAttachedManagedPolicy })
  attachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  @Metadata({ data: "json, name=CreateDate" })
  createDate?: string;

  @Metadata({ data: "json, name=InstanceProfileList", elemType: shared.AwsIamInstanceProfile })
  instanceProfileList?: AwsIamInstanceProfile[];

  @Metadata({ data: "json, name=MaxSessionDuration" })
  maxSessionDuration?: number;

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=PermissionsBoundary" })
  permissionsBoundary?: AwsIamPermissionsBoundary;

  @Metadata({ data: "json, name=RoleId" })
  roleId?: string;

  @Metadata({ data: "json, name=RoleName" })
  roleName?: string;

  @Metadata({ data: "json, name=RolePolicyList", elemType: shared.AwsIamRolePolicy })
  rolePolicyList?: AwsIamRolePolicy[];
}
