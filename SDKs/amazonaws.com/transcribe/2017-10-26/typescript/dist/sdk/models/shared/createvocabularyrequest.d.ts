import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Tag } from "./tag";
export declare class CreateVocabularyRequest extends SpeakeasyBase {
    languageCode: LanguageCodeEnum;
    phrases?: string[];
    tags?: Tag[];
    vocabularyFileUri?: string;
    vocabularyName: string;
}
