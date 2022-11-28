import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SetDimension } from "./setdimension";
import { GpsPointDimension } from "./gpspointdimension";



// SegmentLocation
/** 
 * Specifies geographical dimension settings for a segment.
**/
export class SegmentLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Country" })
  country?: SetDimension;

  @SpeakeasyMetadata({ data: "json, name=GPSPoint" })
  gpsPoint?: GpsPointDimension;
}
