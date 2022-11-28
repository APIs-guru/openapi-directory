import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GroupInfo } from "./groupinfo";
import { PendingGroupData } from "./pendinggroupdata";
import { PendingUserData } from "./pendinguserdata";
import { UserInfo } from "./userinfo";


export enum PendingAssignmentDataStateEnum {
    Accepted = "ACCEPTED",
    Denied = "DENIED",
    Waiting = "WAITING"
}


// PendingAssignmentData
/** 
 * Pending assignment information
**/
export class PendingAssignmentData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "json, name=groupInfo" })
  groupInfo: GroupInfo;

  @SpeakeasyMetadata({ data: "json, name=pendingGroupData" })
  pendingGroupData: PendingGroupData;

  @SpeakeasyMetadata({ data: "json, name=pendingUserData" })
  pendingUserData: PendingUserData;

  @SpeakeasyMetadata({ data: "json, name=roomId" })
  roomId: number;

  @SpeakeasyMetadata({ data: "json, name=roomName" })
  roomName: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: PendingAssignmentDataStateEnum;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: number;

  @SpeakeasyMetadata({ data: "json, name=userInfo" })
  userInfo: UserInfo;
}
