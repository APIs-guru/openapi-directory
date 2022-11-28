import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { VocabularyStateEnum } from "./vocabularystateenum";
/**
 * Provides information about a custom vocabulary.
**/
export declare class VocabularyInfo extends SpeakeasyBase {
    languageCode?: LanguageCodeEnum;
    lastModifiedTime?: Date;
    vocabularyName?: string;
    vocabularyState?: VocabularyStateEnum;
}
