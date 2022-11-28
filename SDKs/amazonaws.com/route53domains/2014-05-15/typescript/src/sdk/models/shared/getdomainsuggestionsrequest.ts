import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDomainSuggestionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DomainName" })
  domainName: string;

  @SpeakeasyMetadata({ data: "json, name=OnlyAvailable" })
  onlyAvailable: boolean;

  @SpeakeasyMetadata({ data: "json, name=SuggestionCount" })
  suggestionCount: number;
}
