import { SpeakeasyBase } from "../../../internal/utils";
import { AssignmentStatusEnum } from "./assignmentstatusenum";
/**
 *  The Assignment data structure represents a single assignment of a HIT to a Worker. The assignment tracks the Worker's efforts to complete the HIT, and contains the results for later retrieval.
**/
export declare class Assignment extends SpeakeasyBase {
    acceptTime?: Date;
    answer?: string;
    approvalTime?: Date;
    assignmentId?: string;
    assignmentStatus?: AssignmentStatusEnum;
    autoApprovalTime?: Date;
    deadline?: Date;
    hitId?: string;
    rejectionTime?: Date;
    requesterFeedback?: string;
    submitTime?: Date;
    workerId?: string;
}
