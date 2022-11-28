import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PropertyNameSuggestion } from "./propertynamesuggestion";



export class GetSearchSuggestionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PropertyNameSuggestions", elemType: PropertyNameSuggestion })
  propertyNameSuggestions?: PropertyNameSuggestion[];
}
