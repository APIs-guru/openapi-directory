import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteTranscriptionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TranscriptionJobName" })
  transcriptionJobName: string;
}
