import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VocabularyFilterMethodEnum } from "./vocabularyfiltermethodenum";



// Settings
/** 
 * Provides optional settings for the <code>StartTranscriptionJob</code> operation.
**/
export class Settings extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=VocabularyFilterMethod" })
  vocabularyFilterMethod?: VocabularyFilterMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=VocabularyFilterName" })
  vocabularyFilterName?: string;

  @SpeakeasyMetadata({ data: "json, name=VocabularyName" })
  vocabularyName?: string;
}
