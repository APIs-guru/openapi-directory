import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PropertyNameSuggestion
/** 
 * A property name returned from a <code>GetSearchSuggestions</code> call that specifies a value in the <code>PropertyNameQuery</code> field.
**/
export class PropertyNameSuggestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=PropertyName" })
  propertyName?: string;
}
