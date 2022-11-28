import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceTier } from "./devicetier";



// DeviceTierSet
/** 
 * A set of device tiers. A tier set determines what variation of app content gets served to a specific device, for device-targeted content. You should assign a priority level to each tier, which determines the ordering by which they are evaluated by Play. See the documentation of DeviceTier.level for more details.
**/
export class DeviceTierSet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceTiers", elemType: DeviceTier })
  deviceTiers?: DeviceTier[];
}
