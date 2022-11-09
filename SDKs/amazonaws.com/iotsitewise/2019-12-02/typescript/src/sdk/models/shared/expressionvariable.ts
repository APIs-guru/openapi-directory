import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VariableValue } from "./variablevalue";


// ExpressionVariable
/** 
 * Contains expression variable information.
**/
export class ExpressionVariable extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=value" })
  value: VariableValue;
}
