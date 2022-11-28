import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateWorkerBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason: string;

  @SpeakeasyMetadata({ data: "json, name=WorkerId" })
  workerId: string;
}
