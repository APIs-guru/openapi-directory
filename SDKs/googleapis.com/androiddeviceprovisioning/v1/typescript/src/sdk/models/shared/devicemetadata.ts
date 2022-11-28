import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeviceMetadata
/** 
 * Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).
**/
export class DeviceMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entries" })
  entries?: Map<string, string>;
}
