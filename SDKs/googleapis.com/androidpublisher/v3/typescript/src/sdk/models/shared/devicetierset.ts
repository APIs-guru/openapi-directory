import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeviceTier } from "./devicetier";


// DeviceTierSet
/** 
 * A set of device tiers. A tier set determines what variation of app content gets served to a specific device, for device-targeted content. You should assign a priority level to each tier, which determines the ordering by which they are evaluated by Play. See the documentation of DeviceTier.level for more details.
**/
export class DeviceTierSet extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceTiers", elemType: shared.DeviceTier })
  deviceTiers?: DeviceTier[];
}
