package shared

type AlarmTypeEnum string

const (
	AlarmTypeEnumCompositeAlarm AlarmTypeEnum = "CompositeAlarm"
	AlarmTypeEnumMetricAlarm    AlarmTypeEnum = "MetricAlarm"
)
