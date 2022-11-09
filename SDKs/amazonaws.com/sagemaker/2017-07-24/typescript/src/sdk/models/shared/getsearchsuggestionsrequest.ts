import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { SuggestionQuery } from "./suggestionquery";


export class GetSearchSuggestionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Resource" })
  resource: ResourceTypeEnum;

  @Metadata({ data: "json, name=SuggestionQuery" })
  suggestionQuery?: SuggestionQuery;
}
