import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HumanLoopActivationConditionsConfig } from "./humanloopactivationconditionsconfig";



// HumanLoopActivationConfig
/** 
 * Provides information about how and under what conditions SageMaker creates a human loop. If <code>HumanLoopActivationConfig</code> is not given, then all requests go to humans.
**/
export class HumanLoopActivationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HumanLoopActivationConditionsConfig" })
  humanLoopActivationConditionsConfig: HumanLoopActivationConditionsConfig;
}
