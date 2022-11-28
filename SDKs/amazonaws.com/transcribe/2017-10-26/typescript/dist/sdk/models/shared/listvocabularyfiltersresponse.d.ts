import { SpeakeasyBase } from "../../../internal/utils";
import { VocabularyFilterInfo } from "./vocabularyfilterinfo";
export declare class ListVocabularyFiltersResponse extends SpeakeasyBase {
    nextToken?: string;
    vocabularyFilters?: VocabularyFilterInfo[];
}
