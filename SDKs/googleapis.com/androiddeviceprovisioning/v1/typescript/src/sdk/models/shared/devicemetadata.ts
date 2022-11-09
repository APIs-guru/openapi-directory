import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeviceMetadata
/** 
 * Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).
**/
export class DeviceMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=entries" })
  entries?: Map<string, string>;
}
