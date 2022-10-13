package shared

type HumanLoopStatusEnum string

const (
	HumanLoopStatusEnumInProgress HumanLoopStatusEnum = "InProgress"
	HumanLoopStatusEnumFailed     HumanLoopStatusEnum = "Failed"
	HumanLoopStatusEnumCompleted  HumanLoopStatusEnum = "Completed"
	HumanLoopStatusEnumStopped    HumanLoopStatusEnum = "Stopped"
	HumanLoopStatusEnumStopping   HumanLoopStatusEnum = "Stopping"
)
