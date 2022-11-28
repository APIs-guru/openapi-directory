import { SpeakeasyBase } from "../../../internal/utils";
import { AwsIamAttachedManagedPolicy } from "./awsiamattachedmanagedpolicy";
import { AwsIamGroupPolicy } from "./awsiamgrouppolicy";
/**
 * Contains details about an IAM group.
**/
export declare class AwsIamGroupDetails extends SpeakeasyBase {
    attachedManagedPolicies?: AwsIamAttachedManagedPolicy[];
    createDate?: string;
    groupId?: string;
    groupName?: string;
    groupPolicyList?: AwsIamGroupPolicy[];
    path?: string;
}
