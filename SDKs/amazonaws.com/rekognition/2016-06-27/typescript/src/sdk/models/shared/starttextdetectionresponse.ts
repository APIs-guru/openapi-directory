import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartTextDetectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
