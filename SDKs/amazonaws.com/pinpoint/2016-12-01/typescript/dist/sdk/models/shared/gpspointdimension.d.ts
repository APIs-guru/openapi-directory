import { SpeakeasyBase } from "../../../internal/utils";
import { GpsCoordinates } from "./gpscoordinates";
/**
 * Specifies GPS-based criteria for including or excluding endpoints from a segment.
**/
export declare class GpsPointDimension extends SpeakeasyBase {
    coordinates: GpsCoordinates;
    rangeInKilometers?: number;
}
