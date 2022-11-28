import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SimpleCondition } from "./simplecondition";
import { OperatorEnum } from "./operatorenum";



// Condition
/** 
 * Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions.
**/
export class Condition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Conditions", elemType: SimpleCondition })
  conditions?: SimpleCondition[];

  @SpeakeasyMetadata({ data: "json, name=Operator" })
  operator?: OperatorEnum;
}
