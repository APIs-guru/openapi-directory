import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScheduleWorkPatternEvenWeeks extends SpeakeasyBase {
    hoursFriday?: number;
    hoursMonday?: number;
    hoursSaturday?: number;
    hoursSunday?: number;
    hoursThursday?: number;
    hoursTuesday?: number;
    hoursWednesday?: number;
}
export declare class ScheduleWorkPatternOddWeeks extends SpeakeasyBase {
    hoursFriday?: number;
    hoursMonday?: number;
    hoursSaturday?: number;
    hoursSunday?: number;
    hoursThursday?: number;
    hoursTuesday?: number;
    hoursWednesday?: number;
}
export declare class ScheduleWorkPattern extends SpeakeasyBase {
    evenWeeks?: ScheduleWorkPatternEvenWeeks;
    oddWeeks?: ScheduleWorkPatternOddWeeks;
}
export declare class Schedule extends SpeakeasyBase {
    endDate: string;
    id: string;
    startDate: string;
    workPattern: ScheduleWorkPattern;
}
