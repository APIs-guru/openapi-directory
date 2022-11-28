import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScheduleWorkPatternEvenWeeks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hours_friday" })
  hoursFriday?: number;

  @SpeakeasyMetadata({ data: "json, name=hours_monday" })
  hoursMonday?: number;

  @SpeakeasyMetadata({ data: "json, name=hours_saturday" })
  hoursSaturday?: number;

  @SpeakeasyMetadata({ data: "json, name=hours_sunday" })
  hoursSunday?: number;

  @SpeakeasyMetadata({ data: "json, name=hours_thursday" })
  hoursThursday?: number;

  @SpeakeasyMetadata({ data: "json, name=hours_tuesday" })
  hoursTuesday?: number;

  @SpeakeasyMetadata({ data: "json, name=hours_wednesday" })
  hoursWednesday?: number;
}


export class ScheduleWorkPatternOddWeeks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hours_friday" })
  hoursFriday?: number;

  @SpeakeasyMetadata({ data: "json, name=hours_monday" })
  hoursMonday?: number;

  @SpeakeasyMetadata({ data: "json, name=hours_saturday" })
  hoursSaturday?: number;

  @SpeakeasyMetadata({ data: "json, name=hours_sunday" })
  hoursSunday?: number;

  @SpeakeasyMetadata({ data: "json, name=hours_thursday" })
  hoursThursday?: number;

  @SpeakeasyMetadata({ data: "json, name=hours_tuesday" })
  hoursTuesday?: number;

  @SpeakeasyMetadata({ data: "json, name=hours_wednesday" })
  hoursWednesday?: number;
}


export class ScheduleWorkPattern extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=even_weeks" })
  evenWeeks?: ScheduleWorkPatternEvenWeeks;

  @SpeakeasyMetadata({ data: "json, name=odd_weeks" })
  oddWeeks?: ScheduleWorkPatternOddWeeks;
}


export class Schedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_date" })
  endDate: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=start_date" })
  startDate: string;

  @SpeakeasyMetadata({ data: "json, name=work_pattern" })
  workPattern: ScheduleWorkPattern;
}
