import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GeoCoordinates
/** 
 * Defines the format of a geographic coordinate.
**/
export class GeoCoordinates extends SpeakeasyBase {
  @Metadata({ data: "json, name=latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=longitude" })
  longitude?: number;
}
