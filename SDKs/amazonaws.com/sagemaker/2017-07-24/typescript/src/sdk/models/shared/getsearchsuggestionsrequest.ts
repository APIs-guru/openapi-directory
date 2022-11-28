import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { SuggestionQuery } from "./suggestionquery";



export class GetSearchSuggestionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Resource" })
  resource: ResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=SuggestionQuery" })
  suggestionQuery?: SuggestionQuery;
}
