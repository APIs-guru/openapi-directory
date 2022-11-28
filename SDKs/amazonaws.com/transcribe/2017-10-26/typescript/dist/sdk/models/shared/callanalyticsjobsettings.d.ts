import { SpeakeasyBase } from "../../../internal/utils";
import { ContentRedaction } from "./contentredaction";
import { LanguageCodeEnum } from "./languagecodeenum";
import { VocabularyFilterMethodEnum } from "./vocabularyfiltermethodenum";
/**
 * Provides optional settings for the <code>CallAnalyticsJob</code> operation.
**/
export declare class CallAnalyticsJobSettings extends SpeakeasyBase {
    contentRedaction?: ContentRedaction;
    languageModelName?: string;
    languageOptions?: LanguageCodeEnum[];
    vocabularyFilterMethod?: VocabularyFilterMethodEnum;
    vocabularyFilterName?: string;
    vocabularyName?: string;
}
