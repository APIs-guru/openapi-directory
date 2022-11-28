import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyNameQuery } from "./propertynamequery";
/**
 * Specified in the <a>GetSearchSuggestions</a> request. Limits the property names that are included in the response.
**/
export declare class SuggestionQuery extends SpeakeasyBase {
    propertyNameQuery?: PropertyNameQuery;
}
