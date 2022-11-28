import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VariableValue } from "./variablevalue";



// ExpressionVariable
/** 
 * Contains expression variable information.
**/
export class ExpressionVariable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: VariableValue;
}
