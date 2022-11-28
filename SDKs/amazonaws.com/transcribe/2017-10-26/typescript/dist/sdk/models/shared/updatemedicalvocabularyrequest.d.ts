import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
export declare class UpdateMedicalVocabularyRequest extends SpeakeasyBase {
    languageCode: LanguageCodeEnum;
    vocabularyFileUri?: string;
    vocabularyName: string;
}
