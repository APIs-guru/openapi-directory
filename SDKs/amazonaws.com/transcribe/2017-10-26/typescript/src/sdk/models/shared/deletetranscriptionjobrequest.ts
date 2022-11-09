import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTranscriptionJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=TranscriptionJobName" })
  transcriptionJobName: string;
}
