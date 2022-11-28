import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacitySize } from "./capacitysize";
import { TrafficRoutingConfigTypeEnum } from "./trafficroutingconfigtypeenum";



// TrafficRoutingConfig
/** 
 * Currently, the <code>TrafficRoutingConfig</code> API is not supported.
**/
export class TrafficRoutingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CanarySize" })
  canarySize?: CapacitySize;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: TrafficRoutingConfigTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=WaitIntervalInSeconds" })
  waitIntervalInSeconds: number;
}
