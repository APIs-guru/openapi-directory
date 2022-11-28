import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyStateEnum } from "./keystateenum";



export class ScheduleKeyDeletionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeletionDate" })
  deletionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyState" })
  keyState?: KeyStateEnum;

  @SpeakeasyMetadata({ data: "json, name=PendingWindowInDays" })
  pendingWindowInDays?: number;
}
