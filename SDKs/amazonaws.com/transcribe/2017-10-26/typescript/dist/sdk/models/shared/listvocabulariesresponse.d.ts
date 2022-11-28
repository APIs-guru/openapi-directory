import { SpeakeasyBase } from "../../../internal/utils";
import { VocabularyStateEnum } from "./vocabularystateenum";
import { VocabularyInfo } from "./vocabularyinfo";
export declare class ListVocabulariesResponse extends SpeakeasyBase {
    nextToken?: string;
    status?: VocabularyStateEnum;
    vocabularies?: VocabularyInfo[];
}
