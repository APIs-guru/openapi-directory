import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceTier
/** 
 * A single device tier. Devices matching any of the device groups in device_group_names are considered to match the tier.
**/
export class DeviceTier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceGroupNames" })
  deviceGroupNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=level" })
  level?: number;
}
