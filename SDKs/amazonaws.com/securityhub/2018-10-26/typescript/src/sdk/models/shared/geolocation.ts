import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GeoLocation
/** 
 * Provides the latitude and longitude coordinates of a location.
**/
export class GeoLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Lat" })
  lat?: number;

  @Metadata({ data: "json, name=Lon" })
  lon?: number;
}
