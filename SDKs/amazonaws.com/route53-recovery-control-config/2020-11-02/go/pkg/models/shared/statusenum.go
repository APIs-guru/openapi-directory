package shared

type StatusEnum string

const (
	StatusEnumPending         StatusEnum = "PENDING"
	StatusEnumDeployed        StatusEnum = "DEPLOYED"
	StatusEnumPendingDeletion StatusEnum = "PENDING_DELETION"
)
