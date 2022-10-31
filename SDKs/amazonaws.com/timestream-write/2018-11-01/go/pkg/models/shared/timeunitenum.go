package shared

type TimeUnitEnum string

const (
	TimeUnitEnumMilliseconds TimeUnitEnum = "MILLISECONDS"
	TimeUnitEnumSeconds      TimeUnitEnum = "SECONDS"
	TimeUnitEnumMicroseconds TimeUnitEnum = "MICROSECONDS"
	TimeUnitEnumNanoseconds  TimeUnitEnum = "NANOSECONDS"
)
