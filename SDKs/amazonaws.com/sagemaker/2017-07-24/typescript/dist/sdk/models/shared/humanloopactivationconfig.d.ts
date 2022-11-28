import { SpeakeasyBase } from "../../../internal/utils";
import { HumanLoopActivationConditionsConfig } from "./humanloopactivationconditionsconfig";
/**
 * Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans.
**/
export declare class HumanLoopActivationConfig extends SpeakeasyBase {
    humanLoopActivationConditionsConfig: HumanLoopActivationConditionsConfig;
}
