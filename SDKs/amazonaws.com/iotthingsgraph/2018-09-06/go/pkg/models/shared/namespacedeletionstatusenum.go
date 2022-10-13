package shared

type NamespaceDeletionStatusEnum string

const (
	NamespaceDeletionStatusEnumInProgress NamespaceDeletionStatusEnum = "IN_PROGRESS"
	NamespaceDeletionStatusEnumSucceeded  NamespaceDeletionStatusEnum = "SUCCEEDED"
	NamespaceDeletionStatusEnumFailed     NamespaceDeletionStatusEnum = "FAILED"
)
