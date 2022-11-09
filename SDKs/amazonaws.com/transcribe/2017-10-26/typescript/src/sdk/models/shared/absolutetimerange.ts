import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AbsoluteTimeRange
/** 
 * A time range, set in seconds, between two points in the call.
**/
export class AbsoluteTimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: number;

  @Metadata({ data: "json, name=First" })
  first?: number;

  @Metadata({ data: "json, name=Last" })
  last?: number;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: number;
}
