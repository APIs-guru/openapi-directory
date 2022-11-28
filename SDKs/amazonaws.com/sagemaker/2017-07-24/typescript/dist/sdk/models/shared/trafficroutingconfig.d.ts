import { SpeakeasyBase } from "../../../internal/utils";
import { CapacitySize } from "./capacitysize";
import { TrafficRoutingConfigTypeEnum } from "./trafficroutingconfigtypeenum";
/**
 * Currently, the <code>TrafficRoutingConfig</code> API is not supported.
**/
export declare class TrafficRoutingConfig extends SpeakeasyBase {
    canarySize?: CapacitySize;
    type: TrafficRoutingConfigTypeEnum;
    waitIntervalInSeconds: number;
}
