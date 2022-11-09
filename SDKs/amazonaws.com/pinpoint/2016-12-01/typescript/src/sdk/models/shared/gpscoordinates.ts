import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GpsCoordinates
/** 
 * Specifies the GPS coordinates of a location.
**/
export class GpsCoordinates extends SpeakeasyBase {
  @Metadata({ data: "json, name=Latitude" })
  latitude: number;

  @Metadata({ data: "json, name=Longitude" })
  longitude: number;
}
