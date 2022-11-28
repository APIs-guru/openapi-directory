import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeSegment
/** 
 * A time period inside of an example that has a time dimension (e.g. video).
**/
export class TimeSegment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTimeOffset" })
  endTimeOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;
}
