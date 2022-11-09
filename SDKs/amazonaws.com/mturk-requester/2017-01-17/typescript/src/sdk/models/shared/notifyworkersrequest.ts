import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NotifyWorkersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=MessageText" })
  messageText: string;

  @Metadata({ data: "json, name=Subject" })
  subject: string;

  @Metadata({ data: "json, name=WorkerIds" })
  workerIds: string[];
}
