import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceId
/** 
 * Identifier of a device.
**/
export class DeviceId extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildBrand" })
  buildBrand?: string;

  @Metadata({ data: "json, name=buildDevice" })
  buildDevice?: string;
}
