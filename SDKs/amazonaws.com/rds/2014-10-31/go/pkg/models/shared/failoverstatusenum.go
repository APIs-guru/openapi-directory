package shared

type FailoverStatusEnum string

const (
	FailoverStatusEnumPending     FailoverStatusEnum = "pending"
	FailoverStatusEnumFailingOver FailoverStatusEnum = "failing-over"
	FailoverStatusEnumCancelling  FailoverStatusEnum = "cancelling"
)
