import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetJobUnlockCodeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId: string;
}
