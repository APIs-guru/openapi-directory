import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingRuleScope } from "./targetingrulescope";
/**
 * Represents a targeting rule of the form: User never had {scope} before.
**/
export declare class AcquisitionTargetingRule extends SpeakeasyBase {
    scope?: TargetingRuleScope;
}
