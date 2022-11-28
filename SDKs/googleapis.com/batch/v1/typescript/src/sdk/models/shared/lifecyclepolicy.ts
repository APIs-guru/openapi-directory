import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionCondition } from "./actioncondition";


export enum LifecyclePolicyActionEnum {
    ActionUnspecified = "ACTION_UNSPECIFIED",
    RetryTask = "RETRY_TASK",
    FailTask = "FAIL_TASK"
}


// LifecyclePolicy
/** 
 * LifecyclePolicy describes how to deal with task failures based on different conditions.
**/
export class LifecyclePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: LifecyclePolicyActionEnum;

  @SpeakeasyMetadata({ data: "json, name=actionCondition" })
  actionCondition?: ActionCondition;
}
