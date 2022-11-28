import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScheduleKeyDeletionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=PendingWindowInDays" })
  pendingWindowInDays?: number;
}
