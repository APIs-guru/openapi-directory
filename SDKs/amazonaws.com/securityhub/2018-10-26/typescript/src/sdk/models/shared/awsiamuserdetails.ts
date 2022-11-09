import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsIamAttachedManagedPolicy } from "./awsiamattachedmanagedpolicy";
import { AwsIamPermissionsBoundary } from "./awsiampermissionsboundary";
import { AwsIamUserPolicy } from "./awsiamuserpolicy";


// AwsIamUserDetails
/** 
 * Information about an IAM user.
**/
export class AwsIamUserDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachedManagedPolicies", elemType: shared.AwsIamAttachedManagedPolicy })
  attachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  @Metadata({ data: "json, name=CreateDate" })
  createDate?: string;

  @Metadata({ data: "json, name=GroupList" })
  groupList?: string[];

  @Metadata({ data: "json, name=Path" })
  path?: string;

  @Metadata({ data: "json, name=PermissionsBoundary" })
  permissionsBoundary?: AwsIamPermissionsBoundary;

  @Metadata({ data: "json, name=UserId" })
  userId?: string;

  @Metadata({ data: "json, name=UserName" })
  userName?: string;

  @Metadata({ data: "json, name=UserPolicyList", elemType: shared.AwsIamUserPolicy })
  userPolicyList?: AwsIamUserPolicy[];
}
