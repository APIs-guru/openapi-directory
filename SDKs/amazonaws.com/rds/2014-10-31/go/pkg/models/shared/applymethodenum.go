package shared

type ApplyMethodEnum string

const (
	ApplyMethodEnumImmediate     ApplyMethodEnum = "immediate"
	ApplyMethodEnumPendingReboot ApplyMethodEnum = "pending-reboot"
)
