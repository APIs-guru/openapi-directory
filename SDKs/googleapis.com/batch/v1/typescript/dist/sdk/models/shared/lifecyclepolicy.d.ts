import { SpeakeasyBase } from "../../../internal/utils";
import { ActionCondition } from "./actioncondition";
export declare enum LifecyclePolicyActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    RetryTask = "RETRY_TASK",
    FailTask = "FAIL_TASK"
}
/**
 * LifecyclePolicy describes how to deal with task failures based on different conditions.
**/
export declare class LifecyclePolicy extends SpeakeasyBase {
    action?: LifecyclePolicyActionEnum;
    actionCondition?: ActionCondition;
}
