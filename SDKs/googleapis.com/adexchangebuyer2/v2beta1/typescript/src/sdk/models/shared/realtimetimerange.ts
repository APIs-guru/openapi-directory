import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RealtimeTimeRange
/** 
 * An open-ended realtime time range specified by the start timestamp. For filter sets that specify a realtime time range RTB metrics continue to be aggregated throughout the lifetime of the filter set.
**/
export class RealtimeTimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=startTimestamp" })
  startTimestamp?: string;
}
