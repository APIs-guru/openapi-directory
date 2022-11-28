import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PropertyNameSuggestion
/** 
 * A property name returned from a <code>GetSearchSuggestions</code> call that specifies a value in the <code>PropertyNameQuery</code> field.
**/
export class PropertyNameSuggestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PropertyName" })
  propertyName?: string;
}
