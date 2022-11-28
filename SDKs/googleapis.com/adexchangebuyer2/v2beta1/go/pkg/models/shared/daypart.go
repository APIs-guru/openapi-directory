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
// Daypart targeting message that specifies if the ad can be shown only during certain parts of a day/week.
type DayPart struct {
	DayOfWeek *DayPartDayOfWeekEnum `json:"dayOfWeek,omitempty"`
	EndTime   *TimeOfDay            `json:"endTime,omitempty"`
	StartTime *TimeOfDay            `json:"startTime,omitempty"`
}
