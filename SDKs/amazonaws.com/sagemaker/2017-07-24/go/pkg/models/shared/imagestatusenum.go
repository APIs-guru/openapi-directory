package shared

type ImageStatusEnum string

const (
	ImageStatusEnumCreating     ImageStatusEnum = "CREATING"
	ImageStatusEnumCreated      ImageStatusEnum = "CREATED"
	ImageStatusEnumCreateFailed ImageStatusEnum = "CREATE_FAILED"
	ImageStatusEnumUpdating     ImageStatusEnum = "UPDATING"
	ImageStatusEnumUpdateFailed ImageStatusEnum = "UPDATE_FAILED"
	ImageStatusEnumDeleting     ImageStatusEnum = "DELETING"
	ImageStatusEnumDeleteFailed ImageStatusEnum = "DELETE_FAILED"
)
