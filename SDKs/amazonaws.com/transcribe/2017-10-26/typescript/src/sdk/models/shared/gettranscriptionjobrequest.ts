import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTranscriptionJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TranscriptionJobName" })
  transcriptionJobName: string;
}
