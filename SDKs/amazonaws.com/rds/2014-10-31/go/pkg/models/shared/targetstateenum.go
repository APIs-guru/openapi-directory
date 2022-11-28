package shared

type TargetStateEnum string

const (
	TargetStateEnumRegistering TargetStateEnum = "REGISTERING"
	TargetStateEnumAvailable   TargetStateEnum = "AVAILABLE"
	TargetStateEnumUnavailable TargetStateEnum = "UNAVAILABLE"
)
