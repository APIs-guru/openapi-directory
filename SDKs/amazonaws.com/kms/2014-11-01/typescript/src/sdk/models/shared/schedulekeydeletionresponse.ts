import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { KeyStateEnum } from "./keystateenum";


export class ScheduleKeyDeletionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeletionDate" })
  deletionDate?: Date;

  @Metadata({ data: "json, name=KeyId" })
  keyId?: string;

  @Metadata({ data: "json, name=KeyState" })
  keyState?: KeyStateEnum;

  @Metadata({ data: "json, name=PendingWindowInDays" })
  pendingWindowInDays?: number;
}
