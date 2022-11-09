import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateWorkerBlockRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Reason" })
  reason: string;

  @Metadata({ data: "json, name=WorkerId" })
  workerId: string;
}
