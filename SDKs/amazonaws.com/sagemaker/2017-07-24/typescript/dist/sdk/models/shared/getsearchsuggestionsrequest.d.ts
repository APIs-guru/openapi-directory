import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceTypeEnum } from "./resourcetypeenum";
import { SuggestionQuery } from "./suggestionquery";
export declare class GetSearchSuggestionsRequest extends SpeakeasyBase {
    resource: ResourceTypeEnum;
    suggestionQuery?: SuggestionQuery;
}
