import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsIamAttachedManagedPolicy } from "./awsiamattachedmanagedpolicy";
import { AwsIamPermissionsBoundary } from "./awsiampermissionsboundary";
import { AwsIamUserPolicy } from "./awsiamuserpolicy";



// AwsIamUserDetails
/** 
 * Information about an IAM user.
**/
export class AwsIamUserDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachedManagedPolicies", elemType: AwsIamAttachedManagedPolicy })
  attachedManagedPolicies?: AwsIamAttachedManagedPolicy[];

  @SpeakeasyMetadata({ data: "json, name=CreateDate" })
  createDate?: string;

  @SpeakeasyMetadata({ data: "json, name=GroupList" })
  groupList?: string[];

  @SpeakeasyMetadata({ data: "json, name=Path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionsBoundary" })
  permissionsBoundary?: AwsIamPermissionsBoundary;

  @SpeakeasyMetadata({ data: "json, name=UserId" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=UserName" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=UserPolicyList", elemType: AwsIamUserPolicy })
  userPolicyList?: AwsIamUserPolicy[];
}
