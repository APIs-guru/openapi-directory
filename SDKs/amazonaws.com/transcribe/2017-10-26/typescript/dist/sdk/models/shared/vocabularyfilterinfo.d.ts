import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
/**
 * Provides information about a vocabulary filter.
**/
export declare class VocabularyFilterInfo extends SpeakeasyBase {
    languageCode?: LanguageCodeEnum;
    lastModifiedTime?: Date;
    vocabularyFilterName?: string;
}
