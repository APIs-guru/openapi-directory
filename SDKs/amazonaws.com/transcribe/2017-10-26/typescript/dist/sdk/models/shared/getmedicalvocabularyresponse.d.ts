import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { VocabularyStateEnum } from "./vocabularystateenum";
export declare class GetMedicalVocabularyResponse extends SpeakeasyBase {
    downloadUri?: string;
    failureReason?: string;
    languageCode?: LanguageCodeEnum;
    lastModifiedTime?: Date;
    vocabularyName?: string;
    vocabularyState?: VocabularyStateEnum;
}
