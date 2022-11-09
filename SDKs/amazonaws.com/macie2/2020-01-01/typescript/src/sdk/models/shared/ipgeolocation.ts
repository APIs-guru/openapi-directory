import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IpGeoLocation
/** 
 * Provides geographic coordinates that indicate where a specified IP address originated from.
**/
export class IpGeoLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lon" })
  lon?: number;
}
