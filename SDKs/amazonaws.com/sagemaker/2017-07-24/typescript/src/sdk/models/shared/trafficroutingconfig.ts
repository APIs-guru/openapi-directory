import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CapacitySize } from "./capacitysize";
import { TrafficRoutingConfigTypeEnum } from "./trafficroutingconfigtypeenum";


// TrafficRoutingConfig
/** 
 * Currently, the <code>TrafficRoutingConfig</code> API is not supported.
**/
export class TrafficRoutingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=CanarySize" })
  canarySize?: CapacitySize;

  @Metadata({ data: "json, name=Type" })
  type: TrafficRoutingConfigTypeEnum;

  @Metadata({ data: "json, name=WaitIntervalInSeconds" })
  waitIntervalInSeconds: number;
}
