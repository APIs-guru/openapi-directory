import { SpeakeasyBase } from "../../../internal/utils";
import { HitReviewStatusEnum } from "./hitreviewstatusenum";
import { HitStatusEnum } from "./hitstatusenum";
import { QualificationRequirement } from "./qualificationrequirement";
/**
 *  The HIT data structure represents a single HIT, including all the information necessary for a Worker to accept and complete the HIT.
**/
export declare class Hit extends SpeakeasyBase {
    assignmentDurationInSeconds?: number;
    autoApprovalDelayInSeconds?: number;
    creationTime?: Date;
    description?: string;
    expiration?: Date;
    hitGroupId?: string;
    hitId?: string;
    hitLayoutId?: string;
    hitReviewStatus?: HitReviewStatusEnum;
    hitStatus?: HitStatusEnum;
    hitTypeId?: string;
    keywords?: string;
    maxAssignments?: number;
    numberOfAssignmentsAvailable?: number;
    numberOfAssignmentsCompleted?: number;
    numberOfAssignmentsPending?: number;
    qualificationRequirements?: QualificationRequirement[];
    question?: string;
    requesterAnnotation?: string;
    reward?: string;
    title?: string;
}
