import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceReference } from "./devicereference";



// CustomerApplyConfigurationRequest
/** 
 * Request message for customer to assign a configuration to device.
**/
export class CustomerApplyConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: DeviceReference;
}
