import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AbsoluteTimeRange
/** 
 * A time range, set in seconds, between two points in the call.
**/
export class AbsoluteTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: number;

  @SpeakeasyMetadata({ data: "json, name=First" })
  first?: number;

  @SpeakeasyMetadata({ data: "json, name=Last" })
  last?: number;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: number;
}
