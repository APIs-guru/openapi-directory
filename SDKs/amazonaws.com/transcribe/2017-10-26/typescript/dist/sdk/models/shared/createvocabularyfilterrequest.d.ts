import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
import { Tag } from "./tag";
export declare class CreateVocabularyFilterRequest extends SpeakeasyBase {
    languageCode: LanguageCodeEnum;
    tags?: Tag[];
    vocabularyFilterFileUri?: string;
    vocabularyFilterName: string;
    words?: string[];
}
