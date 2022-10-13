package shared

type ProjectStatusEnum string

const (
	ProjectStatusEnumCreating ProjectStatusEnum = "CREATING"
	ProjectStatusEnumCreated  ProjectStatusEnum = "CREATED"
	ProjectStatusEnumDeleting ProjectStatusEnum = "DELETING"
)
