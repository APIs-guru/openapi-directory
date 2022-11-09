import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { VocabularyFilterInfo } from "./vocabularyfilterinfo";


export class ListVocabularyFiltersResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=VocabularyFilters", elemType: shared.VocabularyFilterInfo })
  vocabularyFilters?: VocabularyFilterInfo[];
}
