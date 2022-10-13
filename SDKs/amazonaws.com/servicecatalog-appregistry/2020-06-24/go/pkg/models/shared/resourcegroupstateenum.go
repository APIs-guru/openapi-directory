package shared

type ResourceGroupStateEnum string

const (
	ResourceGroupStateEnumCreating       ResourceGroupStateEnum = "CREATING"
	ResourceGroupStateEnumCreateComplete ResourceGroupStateEnum = "CREATE_COMPLETE"
	ResourceGroupStateEnumCreateFailed   ResourceGroupStateEnum = "CREATE_FAILED"
	ResourceGroupStateEnumUpdating       ResourceGroupStateEnum = "UPDATING"
	ResourceGroupStateEnumUpdateComplete ResourceGroupStateEnum = "UPDATE_COMPLETE"
	ResourceGroupStateEnumUpdateFailed   ResourceGroupStateEnum = "UPDATE_FAILED"
)
