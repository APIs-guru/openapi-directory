import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MedicalTranscript
/** 
 * Identifies the location of a medical transcript.
**/
export class MedicalTranscript extends SpeakeasyBase {
  @Metadata({ data: "json, name=TranscriptFileUri" })
  transcriptFileUri?: string;
}
