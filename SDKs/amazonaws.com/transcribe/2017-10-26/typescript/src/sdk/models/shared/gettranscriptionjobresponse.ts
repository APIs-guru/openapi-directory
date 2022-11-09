import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TranscriptionJob } from "./transcriptionjob";


export class GetTranscriptionJobResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=TranscriptionJob" })
  transcriptionJob?: TranscriptionJob;
}
