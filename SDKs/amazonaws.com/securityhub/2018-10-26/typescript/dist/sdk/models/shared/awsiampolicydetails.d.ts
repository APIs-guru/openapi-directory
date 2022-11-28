import { SpeakeasyBase } from "../../../internal/utils";
import { AwsIamPolicyVersion } from "./awsiampolicyversion";
/**
 * Represents an IAM permissions policy.
**/
export declare class AwsIamPolicyDetails extends SpeakeasyBase {
    attachmentCount?: number;
    createDate?: string;
    defaultVersionId?: string;
    description?: string;
    isAttachable?: boolean;
    path?: string;
    permissionsBoundaryUsageCount?: number;
    policyId?: string;
    policyName?: string;
    policyVersionList?: AwsIamPolicyVersion[];
    updateDate?: string;
}
