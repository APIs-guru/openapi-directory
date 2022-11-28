package shared

type TargetHealthReasonEnum string

const (
	TargetHealthReasonEnumUnreachable             TargetHealthReasonEnum = "UNREACHABLE"
	TargetHealthReasonEnumConnectionFailed        TargetHealthReasonEnum = "CONNECTION_FAILED"
	TargetHealthReasonEnumAuthFailure             TargetHealthReasonEnum = "AUTH_FAILURE"
	TargetHealthReasonEnumPendingProxyCapacity    TargetHealthReasonEnum = "PENDING_PROXY_CAPACITY"
	TargetHealthReasonEnumInvalidReplicationState TargetHealthReasonEnum = "INVALID_REPLICATION_STATE"
)
