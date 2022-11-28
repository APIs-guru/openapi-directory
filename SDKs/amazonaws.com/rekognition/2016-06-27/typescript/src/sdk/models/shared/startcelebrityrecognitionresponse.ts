import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StartCelebrityRecognitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=JobId" })
  jobId?: string;
}
