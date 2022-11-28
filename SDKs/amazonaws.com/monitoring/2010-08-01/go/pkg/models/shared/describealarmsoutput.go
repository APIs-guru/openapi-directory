package shared

type DescribeAlarmsOutput struct {
	CompositeAlarms []CompositeAlarm
	MetricAlarms    []MetricAlarm
	NextToken       *string
}
