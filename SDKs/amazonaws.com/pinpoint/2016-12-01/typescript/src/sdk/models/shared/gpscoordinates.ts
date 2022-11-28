import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GpsCoordinates
/** 
 * Specifies the GPS coordinates of a location.
**/
export class GpsCoordinates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Latitude" })
  latitude: number;

  @SpeakeasyMetadata({ data: "json, name=Longitude" })
  longitude: number;
}
