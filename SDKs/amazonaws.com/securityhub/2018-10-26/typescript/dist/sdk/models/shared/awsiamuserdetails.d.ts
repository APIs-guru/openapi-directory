import { SpeakeasyBase } from "../../../internal/utils";
import { AwsIamAttachedManagedPolicy } from "./awsiamattachedmanagedpolicy";
import { AwsIamPermissionsBoundary } from "./awsiampermissionsboundary";
import { AwsIamUserPolicy } from "./awsiamuserpolicy";
/**
 * Information about an IAM user.
**/
export declare class AwsIamUserDetails extends SpeakeasyBase {
    attachedManagedPolicies?: AwsIamAttachedManagedPolicy[];
    createDate?: string;
    groupList?: string[];
    path?: string;
    permissionsBoundary?: AwsIamPermissionsBoundary;
    userId?: string;
    userName?: string;
    userPolicyList?: AwsIamUserPolicy[];
}
