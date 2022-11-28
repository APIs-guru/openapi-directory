import { SpeakeasyBase } from "../../../internal/utils";
import { WorkloadEnvironmentEnum } from "./workloadenvironmentenum";
import { WorkloadImprovementStatusEnum } from "./workloadimprovementstatusenum";
/**
 * A workload return object.
**/
export declare class Workload extends SpeakeasyBase {
    accountIds?: string[];
    architecturalDesign?: string;
    awsRegions?: string[];
    description?: string;
    environment?: WorkloadEnvironmentEnum;
    improvementStatus?: WorkloadImprovementStatusEnum;
    industry?: string;
    industryType?: string;
    isReviewOwnerUpdateAcknowledged?: boolean;
    lenses?: string[];
    nonAwsRegions?: string[];
    notes?: string;
    owner?: string;
    pillarPriorities?: string[];
    reviewOwner?: string;
    reviewRestrictionDate?: Date;
    riskCounts?: Map<string, number>;
    shareInvitationId?: string;
    tags?: Map<string, string>;
    updatedAt?: Date;
    workloadArn?: string;
    workloadId?: string;
    workloadName?: string;
}
