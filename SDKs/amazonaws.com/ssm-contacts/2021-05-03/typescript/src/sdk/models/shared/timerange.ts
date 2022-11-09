import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TimeRange
/** 
 * A range of between two set times
**/
export class TimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
