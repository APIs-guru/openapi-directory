package shared

type LoggingLevelEnum string

const (
	LoggingLevelEnumCritical LoggingLevelEnum = "CRITICAL"
	LoggingLevelEnumError    LoggingLevelEnum = "ERROR"
	LoggingLevelEnumWarning  LoggingLevelEnum = "WARNING"
	LoggingLevelEnumInfo     LoggingLevelEnum = "INFO"
	LoggingLevelEnumDebug    LoggingLevelEnum = "DEBUG"
)
