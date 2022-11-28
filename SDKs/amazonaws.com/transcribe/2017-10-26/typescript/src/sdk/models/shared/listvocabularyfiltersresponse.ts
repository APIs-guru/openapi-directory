import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VocabularyFilterInfo } from "./vocabularyfilterinfo";



export class ListVocabularyFiltersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=VocabularyFilters", elemType: VocabularyFilterInfo })
  vocabularyFilters?: VocabularyFilterInfo[];
}
