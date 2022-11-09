import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GpsCoordinates } from "./gpscoordinates";


// GpsPointDimension
/** 
 * Specifies GPS-based criteria for including or excluding endpoints from a segment.
**/
export class GpsPointDimension extends SpeakeasyBase {
  @Metadata({ data: "json, name=Coordinates" })
  coordinates: GpsCoordinates;

  @Metadata({ data: "json, name=RangeInKilometers" })
  rangeInKilometers?: number;
}
