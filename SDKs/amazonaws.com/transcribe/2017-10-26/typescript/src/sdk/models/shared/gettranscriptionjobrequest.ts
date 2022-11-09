import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTranscriptionJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TranscriptionJobName" })
  transcriptionJobName: string;
}
