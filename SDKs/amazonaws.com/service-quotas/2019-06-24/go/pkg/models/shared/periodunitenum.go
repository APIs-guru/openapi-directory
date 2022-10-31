package shared

type PeriodUnitEnum string

const (
	PeriodUnitEnumMicrosecond PeriodUnitEnum = "MICROSECOND"
	PeriodUnitEnumMillisecond PeriodUnitEnum = "MILLISECOND"
	PeriodUnitEnumSecond      PeriodUnitEnum = "SECOND"
	PeriodUnitEnumMinute      PeriodUnitEnum = "MINUTE"
	PeriodUnitEnumHour        PeriodUnitEnum = "HOUR"
	PeriodUnitEnumDay         PeriodUnitEnum = "DAY"
	PeriodUnitEnumWeek        PeriodUnitEnum = "WEEK"
)
