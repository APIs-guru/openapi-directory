import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StartFaceDetectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=JobId" })
  jobId?: string;
}
