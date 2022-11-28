import { SpeakeasyBase } from "../../../internal/utils";
import { AwsIamAttachedManagedPolicy } from "./awsiamattachedmanagedpolicy";
import { AwsIamInstanceProfile } from "./awsiaminstanceprofile";
import { AwsIamPermissionsBoundary } from "./awsiampermissionsboundary";
import { AwsIamRolePolicy } from "./awsiamrolepolicy";
/**
 * Contains information about an IAM role, including all of the role's policies.
**/
export declare class AwsIamRoleDetails extends SpeakeasyBase {
    assumeRolePolicyDocument?: string;
    attachedManagedPolicies?: AwsIamAttachedManagedPolicy[];
    createDate?: string;
    instanceProfileList?: AwsIamInstanceProfile[];
    maxSessionDuration?: number;
    path?: string;
    permissionsBoundary?: AwsIamPermissionsBoundary;
    roleId?: string;
    roleName?: string;
    rolePolicyList?: AwsIamRolePolicy[];
}
