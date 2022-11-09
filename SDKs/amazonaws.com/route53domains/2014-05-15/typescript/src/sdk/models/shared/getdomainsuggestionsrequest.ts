import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDomainSuggestionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DomainName" })
  domainName: string;

  @Metadata({ data: "json, name=OnlyAvailable" })
  onlyAvailable: boolean;

  @Metadata({ data: "json, name=SuggestionCount" })
  suggestionCount: number;
}
