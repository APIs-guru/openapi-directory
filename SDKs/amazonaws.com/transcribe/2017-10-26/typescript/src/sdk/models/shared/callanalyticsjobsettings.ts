import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContentRedaction } from "./contentredaction";
import { LanguageCodeEnum } from "./languagecodeenum";
import { VocabularyFilterMethodEnum } from "./vocabularyfiltermethodenum";


// CallAnalyticsJobSettings
/** 
 * Provides optional settings for the <code>CallAnalyticsJob</code> operation. 
**/
export class CallAnalyticsJobSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContentRedaction" })
  contentRedaction?: ContentRedaction;

  @Metadata({ data: "json, name=LanguageModelName" })
  languageModelName?: string;

  @Metadata({ data: "json, name=LanguageOptions" })
  languageOptions?: LanguageCodeEnum[];

  @Metadata({ data: "json, name=VocabularyFilterMethod" })
  vocabularyFilterMethod?: VocabularyFilterMethodEnum;

  @Metadata({ data: "json, name=VocabularyFilterName" })
  vocabularyFilterName?: string;

  @Metadata({ data: "json, name=VocabularyName" })
  vocabularyName?: string;
}
