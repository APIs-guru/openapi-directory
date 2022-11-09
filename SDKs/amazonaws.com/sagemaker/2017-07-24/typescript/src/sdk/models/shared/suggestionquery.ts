import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PropertyNameQuery } from "./propertynamequery";


// SuggestionQuery
/** 
 * Specified in the <a>GetSearchSuggestions</a> request. Limits the property names that are included in the response.
**/
export class SuggestionQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=PropertyNameQuery" })
  propertyNameQuery?: PropertyNameQuery;
}
