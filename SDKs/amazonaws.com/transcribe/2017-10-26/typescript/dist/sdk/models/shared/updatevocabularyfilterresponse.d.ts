import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
export declare class UpdateVocabularyFilterResponse extends SpeakeasyBase {
    languageCode?: LanguageCodeEnum;
    lastModifiedTime?: Date;
    vocabularyFilterName?: string;
}
