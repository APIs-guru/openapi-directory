import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceId
/** 
 * Identifier of a device.
**/
export class DeviceId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildBrand" })
  buildBrand?: string;

  @SpeakeasyMetadata({ data: "json, name=buildDevice" })
  buildDevice?: string;
}
