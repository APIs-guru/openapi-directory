import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TranscriptionJob } from "./transcriptionjob";



export class GetTranscriptionJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TranscriptionJob" })
  transcriptionJob?: TranscriptionJob;
}
