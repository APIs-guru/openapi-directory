import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleCondition } from "./simplecondition";
/**
 * Specifies a condition to evaluate for an activity path in a journey.
**/
export declare class MultiConditionalBranch extends SpeakeasyBase {
    condition?: SimpleCondition;
    nextActivity?: string;
}
