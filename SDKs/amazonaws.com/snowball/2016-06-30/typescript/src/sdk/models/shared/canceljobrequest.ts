import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CancelJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
