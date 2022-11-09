import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PendingAssignmentStateEnum {
    Accepted = "ACCEPTED"
,    Denied = "DENIED"
,    Waiting = "WAITING"
}


// PendingAssignment
/** 
 * Pending assignment information
**/
export class PendingAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=groupId" })
  groupId: number;

  @Metadata({ data: "json, name=roomId" })
  roomId: number;

  @Metadata({ data: "json, name=roomName" })
  roomName: string;

  @Metadata({ data: "json, name=state" })
  state: PendingAssignmentStateEnum;

  @Metadata({ data: "json, name=userId" })
  userId: number;
}
