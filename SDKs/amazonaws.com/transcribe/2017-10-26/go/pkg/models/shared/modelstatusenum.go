package shared

type ModelStatusEnum string

const (
	ModelStatusEnumInProgress ModelStatusEnum = "IN_PROGRESS"
	ModelStatusEnumFailed     ModelStatusEnum = "FAILED"
	ModelStatusEnumCompleted  ModelStatusEnum = "COMPLETED"
)
