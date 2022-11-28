import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MedicalTranscriptionSetting
/** 
 * Optional settings for the <a>StartMedicalTranscriptionJob</a> operation.
**/
export class MedicalTranscriptionSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ChannelIdentification" })
  channelIdentification?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxAlternatives" })
  maxAlternatives?: number;

  @SpeakeasyMetadata({ data: "json, name=MaxSpeakerLabels" })
  maxSpeakerLabels?: number;

  @SpeakeasyMetadata({ data: "json, name=ShowAlternatives" })
  showAlternatives?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ShowSpeakerLabels" })
  showSpeakerLabels?: boolean;

  @SpeakeasyMetadata({ data: "json, name=VocabularyName" })
  vocabularyName?: string;
}
