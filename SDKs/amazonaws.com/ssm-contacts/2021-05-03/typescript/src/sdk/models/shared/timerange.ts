import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TimeRange
/** 
 * A range of between two set times
**/
export class TimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;
}
