import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JourneySchedule
/** 
 * Specifies the schedule settings for a journey.
**/
export class JourneySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Timezone" })
  timezone?: string;
}
