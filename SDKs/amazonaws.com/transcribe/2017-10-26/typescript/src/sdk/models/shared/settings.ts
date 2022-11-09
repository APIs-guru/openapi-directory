import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VocabularyFilterMethodEnum } from "./vocabularyfiltermethodenum";


// Settings
/** 
 * Provides optional settings for the <code>StartTranscriptionJob</code> operation.
**/
export class Settings extends SpeakeasyBase {
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

  @Metadata({ data: "json, name=VocabularyFilterMethod" })
  vocabularyFilterMethod?: VocabularyFilterMethodEnum;

  @Metadata({ data: "json, name=VocabularyFilterName" })
  vocabularyFilterName?: string;

  @Metadata({ data: "json, name=VocabularyName" })
  vocabularyName?: string;
}
