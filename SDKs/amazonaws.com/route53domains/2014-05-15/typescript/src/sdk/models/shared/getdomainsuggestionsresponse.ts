import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DomainSuggestion } from "./domainsuggestion";



export class GetDomainSuggestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SuggestionsList", elemType: DomainSuggestion })
  suggestionsList?: DomainSuggestion[];
}
