package shared

type LogLevelEnum string

const (
	LogLevelEnumAll   LogLevelEnum = "ALL"
	LogLevelEnumError LogLevelEnum = "ERROR"
	LogLevelEnumFatal LogLevelEnum = "FATAL"
	LogLevelEnumOff   LogLevelEnum = "OFF"
)
