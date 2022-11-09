import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DeviceReference } from "./devicereference";


// CustomerApplyConfigurationRequest
/** 
 * Request message for customer to assign a configuration to device.
**/
export class CustomerApplyConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration?: string;

  @Metadata({ data: "json, name=device" })
  device?: DeviceReference;
}
