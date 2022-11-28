import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MedicalTranscript
/** 
 * Identifies the location of a medical transcript.
**/
export class MedicalTranscript extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TranscriptFileUri" })
  transcriptFileUri?: string;
}
