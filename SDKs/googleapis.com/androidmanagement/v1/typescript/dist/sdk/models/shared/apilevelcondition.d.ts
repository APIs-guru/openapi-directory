import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A compliance rule condition which is satisfied if the Android Framework API level on the device doesn't meet a minimum requirement. There can only be one rule with this type of condition per policy.
**/
export declare class ApiLevelCondition extends SpeakeasyBase {
    minApiLevel?: number;
}
