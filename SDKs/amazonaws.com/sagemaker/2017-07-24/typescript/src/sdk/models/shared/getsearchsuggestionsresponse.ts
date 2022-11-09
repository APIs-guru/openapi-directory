import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PropertyNameSuggestion } from "./propertynamesuggestion";


export class GetSearchSuggestionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=PropertyNameSuggestions", elemType: shared.PropertyNameSuggestion })
  propertyNameSuggestions?: PropertyNameSuggestion[];
}
