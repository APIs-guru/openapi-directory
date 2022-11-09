import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScheduleKeyDeletionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=KeyId" })
  keyId: string;

  @Metadata({ data: "json, name=PendingWindowInDays" })
  pendingWindowInDays?: number;
}
