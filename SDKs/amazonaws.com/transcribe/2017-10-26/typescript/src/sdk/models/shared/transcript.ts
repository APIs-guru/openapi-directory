import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Transcript
/** 
 * Identifies the location of a transcription.
**/
export class Transcript extends SpeakeasyBase {
  @Metadata({ data: "json, name=RedactedTranscriptFileUri" })
  redactedTranscriptFileUri?: string;

  @Metadata({ data: "json, name=TranscriptFileUri" })
  transcriptFileUri?: string;
}
