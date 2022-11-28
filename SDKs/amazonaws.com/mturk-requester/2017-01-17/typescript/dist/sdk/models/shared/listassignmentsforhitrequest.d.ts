import { SpeakeasyBase } from "../../../internal/utils";
import { AssignmentStatusEnum } from "./assignmentstatusenum";
export declare class ListAssignmentsForHitRequest extends SpeakeasyBase {
    assignmentStatuses?: AssignmentStatusEnum[];
    hitId: string;
    maxResults?: number;
    nextToken?: string;
}
