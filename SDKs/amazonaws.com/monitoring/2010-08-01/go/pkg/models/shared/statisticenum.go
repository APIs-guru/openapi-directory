package shared

type StatisticEnum string

const (
	StatisticEnumSampleCount StatisticEnum = "SampleCount"
	StatisticEnumAverage     StatisticEnum = "Average"
	StatisticEnumSum         StatisticEnum = "Sum"
	StatisticEnumMinimum     StatisticEnum = "Minimum"
	StatisticEnumMaximum     StatisticEnum = "Maximum"
)
