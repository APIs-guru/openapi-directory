import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Transcript
/** 
 * Identifies the location of a transcription.
**/
export class Transcript extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RedactedTranscriptFileUri" })
  redactedTranscriptFileUri?: string;

  @SpeakeasyMetadata({ data: "json, name=TranscriptFileUri" })
  transcriptFileUri?: string;
}
