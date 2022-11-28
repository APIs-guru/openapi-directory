import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PropertyNameQuery
/** 
 * Part of the <code>SuggestionQuery</code> type. Specifies a hint for retrieving property names that begin with the specified text.
**/
export class PropertyNameQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PropertyNameHint" })
  propertyNameHint: string;
}
