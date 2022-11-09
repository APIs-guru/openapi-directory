import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SimpleCondition } from "./simplecondition";
import { OperatorEnum } from "./operatorenum";


// Condition
/** 
 * Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions.
**/
export class Condition extends SpeakeasyBase {
  @Metadata({ data: "json, name=Conditions", elemType: shared.SimpleCondition })
  conditions?: SimpleCondition[];

  @Metadata({ data: "json, name=Operator" })
  operator?: OperatorEnum;
}
