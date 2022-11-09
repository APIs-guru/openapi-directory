import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceRam
/** 
 * Conditions about a device's RAM capabilities.
**/
export class DeviceRam extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxBytes" })
  maxBytes?: string;

  @Metadata({ data: "json, name=minBytes" })
  minBytes?: string;
}
