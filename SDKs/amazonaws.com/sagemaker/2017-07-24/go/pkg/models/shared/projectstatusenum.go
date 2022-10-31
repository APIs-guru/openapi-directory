package shared

type ProjectStatusEnum string

const (
	ProjectStatusEnumPending          ProjectStatusEnum = "Pending"
	ProjectStatusEnumCreateInProgress ProjectStatusEnum = "CreateInProgress"
	ProjectStatusEnumCreateCompleted  ProjectStatusEnum = "CreateCompleted"
	ProjectStatusEnumCreateFailed     ProjectStatusEnum = "CreateFailed"
	ProjectStatusEnumDeleteInProgress ProjectStatusEnum = "DeleteInProgress"
	ProjectStatusEnumDeleteFailed     ProjectStatusEnum = "DeleteFailed"
	ProjectStatusEnumDeleteCompleted  ProjectStatusEnum = "DeleteCompleted"
)
