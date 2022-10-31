package shared




type DayPartDayOfWeekEnum string

const (
    DayPartDayOfWeekEnumDayOfWeekUnspecified DayPartDayOfWeekEnum = "DAY_OF_WEEK_UNSPECIFIED"
DayPartDayOfWeekEnumMonday DayPartDayOfWeekEnum = "MONDAY"
DayPartDayOfWeekEnumTuesday DayPartDayOfWeekEnum = "TUESDAY"
DayPartDayOfWeekEnumWednesday DayPartDayOfWeekEnum = "WEDNESDAY"
DayPartDayOfWeekEnumThursday DayPartDayOfWeekEnum = "THURSDAY"
DayPartDayOfWeekEnumFriday DayPartDayOfWeekEnum = "FRIDAY"
DayPartDayOfWeekEnumSaturday DayPartDayOfWeekEnum = "SATURDAY"
DayPartDayOfWeekEnumSunday DayPartDayOfWeekEnum = "SUNDAY"
)


type DayPart struct {
    DayOfWeek *DayPartDayOfWeekEnum `json:"dayOfWeek,omitempty"`
    EndTime *TimeOfDay `json:"endTime,omitempty"`
    StartTime *TimeOfDay `json:"startTime,omitempty"`
    
}

