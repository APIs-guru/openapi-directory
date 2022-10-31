package shared




type ActionStatusEnum string

const (
    ActionStatusEnumUnknown ActionStatusEnum = "Unknown"
ActionStatusEnumInProgress ActionStatusEnum = "InProgress"
ActionStatusEnumCompleted ActionStatusEnum = "Completed"
ActionStatusEnumFailed ActionStatusEnum = "Failed"
ActionStatusEnumStopping ActionStatusEnum = "Stopping"
ActionStatusEnumStopped ActionStatusEnum = "Stopped"
)


