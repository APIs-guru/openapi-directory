package shared

type AlarmStateEnum string

const (
	AlarmStateEnumOk               AlarmStateEnum = "OK"
	AlarmStateEnumAlarm            AlarmStateEnum = "ALARM"
	AlarmStateEnumInsufficientData AlarmStateEnum = "INSUFFICIENT_DATA"
)
