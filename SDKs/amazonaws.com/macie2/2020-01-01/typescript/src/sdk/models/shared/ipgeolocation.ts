import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IpGeoLocation
/** 
 * Provides geographic coordinates that indicate where a specified IP address originated from.
**/
export class IpGeoLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;
}
