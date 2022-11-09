import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TrafficRoutingConfig } from "./trafficroutingconfig";


// BlueGreenUpdatePolicy
/** 
 * Currently, the <code>BlueGreenUpdatePolicy</code> API is not supported.
**/
export class BlueGreenUpdatePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=MaximumExecutionTimeoutInSeconds" })
  maximumExecutionTimeoutInSeconds?: number;

  @Metadata({ data: "json, name=TerminationWaitInSeconds" })
  terminationWaitInSeconds?: number;

  @Metadata({ data: "json, name=TrafficRoutingConfiguration" })
  trafficRoutingConfiguration: TrafficRoutingConfig;
}
