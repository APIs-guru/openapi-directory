package shared

type DetailedAlgorithmStatusEnum string

const (
	DetailedAlgorithmStatusEnumNotStarted DetailedAlgorithmStatusEnum = "NotStarted"
	DetailedAlgorithmStatusEnumInProgress DetailedAlgorithmStatusEnum = "InProgress"
	DetailedAlgorithmStatusEnumCompleted  DetailedAlgorithmStatusEnum = "Completed"
	DetailedAlgorithmStatusEnumFailed     DetailedAlgorithmStatusEnum = "Failed"
)
