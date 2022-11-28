package shared

import (
	"time"
)

// MetricAlarm
// The details about a metric alarm.
type MetricAlarm struct {
	ActionsEnabled                     *bool
	AlarmActions                       []string
	AlarmArn                           *string
	AlarmConfigurationUpdatedTimestamp *time.Time
	AlarmDescription                   *string
	AlarmName                          *string
	ComparisonOperator                 *ComparisonOperatorEnum
	DatapointsToAlarm                  *int64
	Dimensions                         []Dimension
	EvaluateLowSampleCountPercentile   *string
	EvaluationPeriods                  *int64
	ExtendedStatistic                  *string
	InsufficientDataActions            []string
	MetricName                         *string
	Metrics                            []MetricDataQuery
	Namespace                          *string
	OkActions                          []string
	Period                             *int64
	StateReason                        *string
	StateReasonData                    *string
	StateUpdatedTimestamp              *time.Time
	StateValue                         *StateValueEnum
	Statistic                          *StatisticEnum
	Threshold                          *float64
	ThresholdMetricID                  *string
	TreatMissingData                   *string
	Unit                               *StandardUnitEnum
}
