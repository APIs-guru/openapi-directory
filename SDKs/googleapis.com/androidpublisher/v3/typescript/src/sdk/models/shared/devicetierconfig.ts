import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceGroup } from "./devicegroup";
import { DeviceTierSet } from "./devicetierset";



// DeviceTierConfig
/** 
 * LINT.IfChange Configuration describing device targeting criteria for the content of an app.
**/
export class DeviceTierConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceGroups", elemType: DeviceGroup })
  deviceGroups?: DeviceGroup[];

  @SpeakeasyMetadata({ data: "json, name=deviceTierConfigId" })
  deviceTierConfigId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceTierSet" })
  deviceTierSet?: DeviceTierSet;
}


// DeviceTierConfigInput
/** 
 * LINT.IfChange Configuration describing device targeting criteria for the content of an app.
**/
export class DeviceTierConfigInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceGroups", elemType: DeviceGroup })
  deviceGroups?: DeviceGroup[];

  @SpeakeasyMetadata({ data: "json, name=deviceTierSet" })
  deviceTierSet?: DeviceTierSet;
}
