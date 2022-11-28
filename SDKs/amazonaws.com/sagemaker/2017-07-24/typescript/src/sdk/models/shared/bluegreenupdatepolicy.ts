import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrafficRoutingConfig } from "./trafficroutingconfig";



// BlueGreenUpdatePolicy
/** 
 * Currently, the <code>BlueGreenUpdatePolicy</code> API is not supported.
**/
export class BlueGreenUpdatePolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=MaximumExecutionTimeoutInSeconds" })
  maximumExecutionTimeoutInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=TerminationWaitInSeconds" })
  terminationWaitInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=TrafficRoutingConfiguration" })
  trafficRoutingConfiguration: TrafficRoutingConfig;
}
