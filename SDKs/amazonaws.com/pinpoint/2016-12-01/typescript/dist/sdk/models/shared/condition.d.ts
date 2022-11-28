import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleCondition } from "./simplecondition";
import { OperatorEnum } from "./operatorenum";
/**
 * Specifies the conditions to evaluate for an activity in a journey, and how to evaluate those conditions.
**/
export declare class Condition extends SpeakeasyBase {
    conditions?: SimpleCondition[];
    operator?: OperatorEnum;
}
