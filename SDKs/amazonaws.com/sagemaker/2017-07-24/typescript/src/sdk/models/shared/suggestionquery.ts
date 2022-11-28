import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PropertyNameQuery } from "./propertynamequery";



// SuggestionQuery
/** 
 * Specified in the <a>GetSearchSuggestions</a> request. Limits the property names that are included in the response.
**/
export class SuggestionQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PropertyNameQuery" })
  propertyNameQuery?: PropertyNameQuery;
}
