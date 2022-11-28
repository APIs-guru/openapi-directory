package shared

type DayPartDayOfWeekEnum string

const (
	DayPartDayOfWeekEnumDayOfWeekUnspecified DayPartDayOfWeekEnum = "DAY_OF_WEEK_UNSPECIFIED"
	DayPartDayOfWeekEnumMonday               DayPartDayOfWeekEnum = "MONDAY"
	DayPartDayOfWeekEnumTuesday              DayPartDayOfWeekEnum = "TUESDAY"
	DayPartDayOfWeekEnumWednesday            DayPartDayOfWeekEnum = "WEDNESDAY"
	DayPartDayOfWeekEnumThursday             DayPartDayOfWeekEnum = "THURSDAY"
	DayPartDayOfWeekEnumFriday               DayPartDayOfWeekEnum = "FRIDAY"
	DayPartDayOfWeekEnumSaturday             DayPartDayOfWeekEnum = "SATURDAY"
	DayPartDayOfWeekEnumSunday               DayPartDayOfWeekEnum = "SUNDAY"
)

// DayPart
// Defines targeting for a period of time on a specific week day.
type DayPart struct {
	DayOfWeek *DayPartDayOfWeekEnum `json:"dayOfWeek,omitempty"`
	EndTime   *TimeOfDay            `json:"endTime,omitempty"`
	StartTime *TimeOfDay            `json:"startTime,omitempty"`
}
