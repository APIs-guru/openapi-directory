import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PendingAssignmentStateEnum {
    Accepted = "ACCEPTED",
    Denied = "DENIED",
    Waiting = "WAITING"
}
/**
 * Pending assignment information
**/
export declare class PendingAssignment extends SpeakeasyBase {
    groupId: number;
    roomId: number;
    roomName: string;
    state: PendingAssignmentStateEnum;
    userId: number;
}
