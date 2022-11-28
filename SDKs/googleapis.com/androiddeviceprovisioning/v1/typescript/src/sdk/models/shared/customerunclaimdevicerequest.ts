import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceReference } from "./devicereference";



// CustomerUnclaimDeviceRequest
/** 
 * Request message for customer to unclaim a device.
**/
export class CustomerUnclaimDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: DeviceReference;
}
