import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceReference } from "./devicereference";


// CustomerRemoveConfigurationRequest
/** 
 * Request message for customer to remove the configuration from device.
**/
export class CustomerRemoveConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=device" })
  device?: DeviceReference;
}
