import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartFaceDetectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
