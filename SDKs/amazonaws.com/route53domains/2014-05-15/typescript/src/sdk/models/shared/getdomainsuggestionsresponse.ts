import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DomainSuggestion } from "./domainsuggestion";


export class GetDomainSuggestionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SuggestionsList", elemType: shared.DomainSuggestion })
  suggestionsList?: DomainSuggestion[];
}
