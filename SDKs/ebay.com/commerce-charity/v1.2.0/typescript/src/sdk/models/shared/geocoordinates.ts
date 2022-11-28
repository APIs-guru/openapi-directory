import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GeoCoordinates
/** 
 * Defines the format of a geographic coordinate.
**/
export class GeoCoordinates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=longitude" })
  longitude?: number;
}
