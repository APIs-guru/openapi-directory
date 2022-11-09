import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScheduleWorkPatternEvenWeeks extends SpeakeasyBase {
  @Metadata({ data: "json, name=hours_friday" })
  hoursFriday?: number;

  @Metadata({ data: "json, name=hours_monday" })
  hoursMonday?: number;

  @Metadata({ data: "json, name=hours_saturday" })
  hoursSaturday?: number;

  @Metadata({ data: "json, name=hours_sunday" })
  hoursSunday?: number;

  @Metadata({ data: "json, name=hours_thursday" })
  hoursThursday?: number;

  @Metadata({ data: "json, name=hours_tuesday" })
  hoursTuesday?: number;

  @Metadata({ data: "json, name=hours_wednesday" })
  hoursWednesday?: number;
}


export class ScheduleWorkPatternOddWeeks extends SpeakeasyBase {
  @Metadata({ data: "json, name=hours_friday" })
  hoursFriday?: number;

  @Metadata({ data: "json, name=hours_monday" })
  hoursMonday?: number;

  @Metadata({ data: "json, name=hours_saturday" })
  hoursSaturday?: number;

  @Metadata({ data: "json, name=hours_sunday" })
  hoursSunday?: number;

  @Metadata({ data: "json, name=hours_thursday" })
  hoursThursday?: number;

  @Metadata({ data: "json, name=hours_tuesday" })
  hoursTuesday?: number;

  @Metadata({ data: "json, name=hours_wednesday" })
  hoursWednesday?: number;
}


export class ScheduleWorkPattern extends SpeakeasyBase {
  @Metadata({ data: "json, name=even_weeks" })
  evenWeeks?: ScheduleWorkPatternEvenWeeks;

  @Metadata({ data: "json, name=odd_weeks" })
  oddWeeks?: ScheduleWorkPatternOddWeeks;
}


export class Schedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_date" })
  endDate: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=start_date" })
  startDate: string;

  @Metadata({ data: "json, name=work_pattern" })
  workPattern: ScheduleWorkPattern;
}
