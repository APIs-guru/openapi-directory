import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceTier
/** 
 * A single device tier. Devices matching any of the device groups in device_group_names are considered to match the tier.
**/
export class DeviceTier extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceGroupNames" })
  deviceGroupNames?: string[];

  @Metadata({ data: "json, name=level" })
  level?: number;
}
