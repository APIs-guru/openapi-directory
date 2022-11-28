import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficRoutingConfig } from "./trafficroutingconfig";
/**
 * Currently, the <code>BlueGreenUpdatePolicy</code> API is not supported.
**/
export declare class BlueGreenUpdatePolicy extends SpeakeasyBase {
    maximumExecutionTimeoutInSeconds?: number;
    terminationWaitInSeconds?: number;
    trafficRoutingConfiguration: TrafficRoutingConfig;
}
