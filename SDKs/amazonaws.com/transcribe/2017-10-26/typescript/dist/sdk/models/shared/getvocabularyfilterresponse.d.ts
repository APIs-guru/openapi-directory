import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageCodeEnum } from "./languagecodeenum";
export declare class GetVocabularyFilterResponse extends SpeakeasyBase {
    downloadUri?: string;
    languageCode?: LanguageCodeEnum;
    lastModifiedTime?: Date;
    vocabularyFilterName?: string;
}
