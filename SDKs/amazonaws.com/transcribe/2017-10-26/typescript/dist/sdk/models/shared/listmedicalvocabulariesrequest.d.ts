import { SpeakeasyBase } from "../../../internal/utils";
import { VocabularyStateEnum } from "./vocabularystateenum";
export declare class ListMedicalVocabulariesRequest extends SpeakeasyBase {
    maxResults?: number;
    nameContains?: string;
    nextToken?: string;
    stateEquals?: VocabularyStateEnum;
}
