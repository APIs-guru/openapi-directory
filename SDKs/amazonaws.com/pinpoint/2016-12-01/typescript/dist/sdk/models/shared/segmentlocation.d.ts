import { SpeakeasyBase } from "../../../internal/utils";
import { SetDimension } from "./setdimension";
import { GpsPointDimension } from "./gpspointdimension";
/**
 * Specifies geographical dimension settings for a segment.
**/
export declare class SegmentLocation extends SpeakeasyBase {
    country?: SetDimension;
    gpsPoint?: GpsPointDimension;
}
