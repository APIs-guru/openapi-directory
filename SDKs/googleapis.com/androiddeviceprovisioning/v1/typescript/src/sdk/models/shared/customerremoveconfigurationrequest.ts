import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceReference } from "./devicereference";



// CustomerRemoveConfigurationRequest
/** 
 * Request message for customer to remove the configuration from device.
**/
export class CustomerRemoveConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: DeviceReference;
}
