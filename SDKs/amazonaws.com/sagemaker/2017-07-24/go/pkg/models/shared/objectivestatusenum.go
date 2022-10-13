package shared

type ObjectiveStatusEnum string

const (
	ObjectiveStatusEnumSucceeded ObjectiveStatusEnum = "Succeeded"
	ObjectiveStatusEnumPending   ObjectiveStatusEnum = "Pending"
	ObjectiveStatusEnumFailed    ObjectiveStatusEnum = "Failed"
)
