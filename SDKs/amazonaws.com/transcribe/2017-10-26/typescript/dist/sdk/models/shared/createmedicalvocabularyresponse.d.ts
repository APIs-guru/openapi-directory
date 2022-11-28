import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { VocabularyStateEnum } from "./vocabularystateenum";
export declare class CreateMedicalVocabularyResponse extends SpeakeasyBase {
    failureReason?: string;
    languageCode?: LanguageCodeEnum;
    lastModifiedTime?: Date;
    vocabularyName?: string;
    vocabularyState?: VocabularyStateEnum;
}
