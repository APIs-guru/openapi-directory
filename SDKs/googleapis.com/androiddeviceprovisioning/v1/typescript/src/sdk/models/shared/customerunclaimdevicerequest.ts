import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceReference } from "./devicereference";


// CustomerUnclaimDeviceRequest
/** 
 * Request message for customer to unclaim a device.
**/
export class CustomerUnclaimDeviceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=device" })
  device?: DeviceReference;
}
