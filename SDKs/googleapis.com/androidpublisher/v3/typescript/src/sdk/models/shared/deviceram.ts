import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceRam
/** 
 * Conditions about a device's RAM capabilities.
**/
export class DeviceRam extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=maxBytes" })
  maxBytes?: string;

  @SpeakeasyMetadata({ data: "json, name=minBytes" })
  minBytes?: string;
}
