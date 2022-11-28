import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { VocabularyStateEnum } from "./vocabularystateenum";
export declare class UpdateVocabularyResponse extends SpeakeasyBase {
    languageCode?: LanguageCodeEnum;
    lastModifiedTime?: Date;
    vocabularyName?: string;
    vocabularyState?: VocabularyStateEnum;
}
