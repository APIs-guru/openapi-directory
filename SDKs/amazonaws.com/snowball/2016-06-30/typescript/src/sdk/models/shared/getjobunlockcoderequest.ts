import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetJobUnlockCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId: string;
}
