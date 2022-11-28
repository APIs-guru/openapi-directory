import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContentRedaction } from "./contentredaction";
import { LanguageCodeEnum } from "./languagecodeenum";
import { VocabularyFilterMethodEnum } from "./vocabularyfiltermethodenum";



// CallAnalyticsJobSettings
/** 
 * Provides optional settings for the <code>CallAnalyticsJob</code> operation. 
**/
export class CallAnalyticsJobSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContentRedaction" })
  contentRedaction?: ContentRedaction;

  @SpeakeasyMetadata({ data: "json, name=LanguageModelName" })
  languageModelName?: string;

  @SpeakeasyMetadata({ data: "json, name=LanguageOptions" })
  languageOptions?: LanguageCodeEnum[];

  @SpeakeasyMetadata({ data: "json, name=VocabularyFilterMethod" })
  vocabularyFilterMethod?: VocabularyFilterMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=VocabularyFilterName" })
  vocabularyFilterName?: string;

  @SpeakeasyMetadata({ data: "json, name=VocabularyName" })
  vocabularyName?: string;
}
