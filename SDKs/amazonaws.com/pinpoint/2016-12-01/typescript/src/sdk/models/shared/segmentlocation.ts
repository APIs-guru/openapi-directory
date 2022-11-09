import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SetDimension } from "./setdimension";
import { GpsPointDimension } from "./gpspointdimension";


// SegmentLocation
/** 
 * Specifies geographical dimension settings for a segment.
**/
export class SegmentLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=Country" })
  country?: SetDimension;

  @Metadata({ data: "json, name=GPSPoint" })
  gpsPoint?: GpsPointDimension;
}
