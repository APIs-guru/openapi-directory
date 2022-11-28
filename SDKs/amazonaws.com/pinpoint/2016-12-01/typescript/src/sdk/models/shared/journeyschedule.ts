import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// JourneySchedule
/** 
 * Specifies the schedule settings for a journey.
**/
export class JourneySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Timezone" })
  timezone?: string;
}
