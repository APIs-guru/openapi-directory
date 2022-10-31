package shared




type ProjectVersionStatusEnum string

const (
    ProjectVersionStatusEnumTrainingInProgress ProjectVersionStatusEnum = "TRAINING_IN_PROGRESS"
ProjectVersionStatusEnumTrainingCompleted ProjectVersionStatusEnum = "TRAINING_COMPLETED"
ProjectVersionStatusEnumTrainingFailed ProjectVersionStatusEnum = "TRAINING_FAILED"
ProjectVersionStatusEnumStarting ProjectVersionStatusEnum = "STARTING"
ProjectVersionStatusEnumRunning ProjectVersionStatusEnum = "RUNNING"
ProjectVersionStatusEnumFailed ProjectVersionStatusEnum = "FAILED"
ProjectVersionStatusEnumStopping ProjectVersionStatusEnum = "STOPPING"
ProjectVersionStatusEnumStopped ProjectVersionStatusEnum = "STOPPED"
ProjectVersionStatusEnumDeleting ProjectVersionStatusEnum = "DELETING"
)


