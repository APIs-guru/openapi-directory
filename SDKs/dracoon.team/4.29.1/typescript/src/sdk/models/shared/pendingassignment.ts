import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PendingAssignmentStateEnum {
    Accepted = "ACCEPTED",
    Denied = "DENIED",
    Waiting = "WAITING"
}


// PendingAssignment
/** 
 * Pending assignment information
**/
export class PendingAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=groupId" })
  groupId: number;

  @SpeakeasyMetadata({ data: "json, name=roomId" })
  roomId: number;

  @SpeakeasyMetadata({ data: "json, name=roomName" })
  roomName: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: PendingAssignmentStateEnum;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: number;
}
