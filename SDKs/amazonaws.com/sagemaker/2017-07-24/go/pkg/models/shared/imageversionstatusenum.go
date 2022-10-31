package shared

type ImageVersionStatusEnum string

const (
	ImageVersionStatusEnumCreating     ImageVersionStatusEnum = "CREATING"
	ImageVersionStatusEnumCreated      ImageVersionStatusEnum = "CREATED"
	ImageVersionStatusEnumCreateFailed ImageVersionStatusEnum = "CREATE_FAILED"
	ImageVersionStatusEnumDeleting     ImageVersionStatusEnum = "DELETING"
	ImageVersionStatusEnumDeleteFailed ImageVersionStatusEnum = "DELETE_FAILED"
)
