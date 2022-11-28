import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Tag } from "./tag";
export declare class CreateMedicalVocabularyRequest extends SpeakeasyBase {
    languageCode: LanguageCodeEnum;
    tags?: Tag[];
    vocabularyFileUri: string;
    vocabularyName: string;
}
