package shared

type ExitBehaviorEnum string

const (
	ExitBehaviorEnumFail    ExitBehaviorEnum = "FAIL"
	ExitBehaviorEnumRestart ExitBehaviorEnum = "RESTART"
)
