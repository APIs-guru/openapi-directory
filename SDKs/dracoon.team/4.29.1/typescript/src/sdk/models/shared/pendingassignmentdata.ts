import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GroupInfo } from "./groupinfo";
import { PendingGroupData } from "./pendinggroupdata";
import { PendingUserData } from "./pendinguserdata";
import { UserInfo } from "./userinfo";

export enum PendingAssignmentDataStateEnum {
    Accepted = "ACCEPTED"
,    Denied = "DENIED"
,    Waiting = "WAITING"
}


// PendingAssignmentData
/** 
 * Pending assignment information
**/
export class PendingAssignmentData extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupId" })
  groupId?: number;

  @Metadata({ data: "json, name=groupInfo" })
  groupInfo: GroupInfo;

  @Metadata({ data: "json, name=pendingGroupData" })
  pendingGroupData: PendingGroupData;

  @Metadata({ data: "json, name=pendingUserData" })
  pendingUserData: PendingUserData;

  @Metadata({ data: "json, name=roomId" })
  roomId: number;

  @Metadata({ data: "json, name=roomName" })
  roomName: string;

  @Metadata({ data: "json, name=state" })
  state: PendingAssignmentDataStateEnum;

  @Metadata({ data: "json, name=userId" })
  userId?: number;

  @Metadata({ data: "json, name=userInfo" })
  userInfo: UserInfo;
}
