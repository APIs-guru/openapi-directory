import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteWorkerBlockRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=WorkerId" })
  workerId: string;
}
