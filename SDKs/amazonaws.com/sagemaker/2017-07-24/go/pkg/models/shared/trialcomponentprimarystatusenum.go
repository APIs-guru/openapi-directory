package shared

type TrialComponentPrimaryStatusEnum string

const (
	TrialComponentPrimaryStatusEnumInProgress TrialComponentPrimaryStatusEnum = "InProgress"
	TrialComponentPrimaryStatusEnumCompleted  TrialComponentPrimaryStatusEnum = "Completed"
	TrialComponentPrimaryStatusEnumFailed     TrialComponentPrimaryStatusEnum = "Failed"
	TrialComponentPrimaryStatusEnumStopping   TrialComponentPrimaryStatusEnum = "Stopping"
	TrialComponentPrimaryStatusEnumStopped    TrialComponentPrimaryStatusEnum = "Stopped"
)
