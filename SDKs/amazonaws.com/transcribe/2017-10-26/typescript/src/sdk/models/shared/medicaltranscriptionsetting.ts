import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MedicalTranscriptionSetting
/** 
 * Optional settings for the <a>StartMedicalTranscriptionJob</a> operation.
**/
export class MedicalTranscriptionSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=ChannelIdentification" })
  channelIdentification?: boolean;

  @Metadata({ data: "json, name=MaxAlternatives" })
  maxAlternatives?: number;

  @Metadata({ data: "json, name=MaxSpeakerLabels" })
  maxSpeakerLabels?: number;

  @Metadata({ data: "json, name=ShowAlternatives" })
  showAlternatives?: boolean;

  @Metadata({ data: "json, name=ShowSpeakerLabels" })
  showSpeakerLabels?: boolean;

  @Metadata({ data: "json, name=VocabularyName" })
  vocabularyName?: string;
}
