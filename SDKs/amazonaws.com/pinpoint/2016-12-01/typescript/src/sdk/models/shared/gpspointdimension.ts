import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GpsCoordinates } from "./gpscoordinates";



// GpsPointDimension
/** 
 * Specifies GPS-based criteria for including or excluding endpoints from a segment.
**/
export class GpsPointDimension extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Coordinates" })
  coordinates: GpsCoordinates;

  @SpeakeasyMetadata({ data: "json, name=RangeInKilometers" })
  rangeInKilometers?: number;
}
