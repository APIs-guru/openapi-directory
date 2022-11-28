import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TranscriptionJob } from "./transcriptionjob";



export class StartTranscriptionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TranscriptionJob" })
  transcriptionJob?: TranscriptionJob;
}
