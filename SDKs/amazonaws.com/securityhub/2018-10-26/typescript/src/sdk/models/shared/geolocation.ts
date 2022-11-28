import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GeoLocation
/** 
 * Provides the latitude and longitude coordinates of a location.
**/
export class GeoLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=Lon" })
  lon?: number;
}
