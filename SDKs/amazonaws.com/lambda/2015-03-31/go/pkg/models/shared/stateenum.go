package shared

type StateEnum string

const (
	StateEnumPending  StateEnum = "Pending"
	StateEnumActive   StateEnum = "Active"
	StateEnumInactive StateEnum = "Inactive"
	StateEnumFailed   StateEnum = "Failed"
)
