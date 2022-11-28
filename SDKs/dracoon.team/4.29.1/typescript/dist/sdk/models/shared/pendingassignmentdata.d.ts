import { SpeakeasyBase } from "../../../internal/utils";
import { GroupInfo } from "./groupinfo";
import { PendingGroupData } from "./pendinggroupdata";
import { PendingUserData } from "./pendinguserdata";
import { UserInfo } from "./userinfo";
export declare enum PendingAssignmentDataStateEnum {
    Accepted = "ACCEPTED",
    Denied = "DENIED",
    Waiting = "WAITING"
}
/**
 * Pending assignment information
**/
export declare class PendingAssignmentData extends SpeakeasyBase {
    groupId?: number;
    groupInfo: GroupInfo;
    pendingGroupData: PendingGroupData;
    pendingUserData: PendingUserData;
    roomId: number;
    roomName: string;
    state: PendingAssignmentDataStateEnum;
    userId?: number;
    userInfo: UserInfo;
}
