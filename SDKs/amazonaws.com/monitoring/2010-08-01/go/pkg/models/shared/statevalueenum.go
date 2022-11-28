package shared

type StateValueEnum string

const (
	StateValueEnumOk               StateValueEnum = "OK"
	StateValueEnumAlarm            StateValueEnum = "ALARM"
	StateValueEnumInsufficientData StateValueEnum = "INSUFFICIENT_DATA"
)
