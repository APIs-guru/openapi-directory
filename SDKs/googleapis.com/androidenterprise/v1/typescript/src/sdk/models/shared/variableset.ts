import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VariableSet
/** 
 * A variable set is a key-value pair of EMM-provided placeholders and its corresponding value, which is attributed to a user. For example, $FIRSTNAME could be a placeholder, and its value could be Alice. Placeholders should start with a '$' sign and should be alphanumeric only.
**/
export class VariableSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=placeholder" })
  placeholder?: string;

  @SpeakeasyMetadata({ data: "json, name=userValue" })
  userValue?: string;
}
