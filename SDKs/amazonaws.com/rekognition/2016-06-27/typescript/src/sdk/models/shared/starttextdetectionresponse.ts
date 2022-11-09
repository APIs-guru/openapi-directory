import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartTextDetectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId?: string;
}
