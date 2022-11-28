import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NotifyWorkersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MessageText" })
  messageText: string;

  @SpeakeasyMetadata({ data: "json, name=Subject" })
  subject: string;

  @SpeakeasyMetadata({ data: "json, name=WorkerIds" })
  workerIds: string[];
}
