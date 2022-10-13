package shared

type AlgorithmStatusEnum string

const (
	AlgorithmStatusEnumPending    AlgorithmStatusEnum = "Pending"
	AlgorithmStatusEnumInProgress AlgorithmStatusEnum = "InProgress"
	AlgorithmStatusEnumCompleted  AlgorithmStatusEnum = "Completed"
	AlgorithmStatusEnumFailed     AlgorithmStatusEnum = "Failed"
	AlgorithmStatusEnumDeleting   AlgorithmStatusEnum = "Deleting"
)
