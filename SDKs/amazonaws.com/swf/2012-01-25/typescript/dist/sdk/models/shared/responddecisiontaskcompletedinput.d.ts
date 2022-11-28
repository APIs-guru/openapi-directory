import { SpeakeasyBase } from "../../../internal/utils";
import { Decision } from "./decision";
/**
 * Input data for a TaskCompleted response to a decision task.
**/
export declare class RespondDecisionTaskCompletedInput extends SpeakeasyBase {
    decisions?: Decision[];
    executionContext?: string;
    taskToken: string;
}
