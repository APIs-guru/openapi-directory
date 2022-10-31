package shared

type CustomPluginStateEnum string

const (
	CustomPluginStateEnumCreating     CustomPluginStateEnum = "CREATING"
	CustomPluginStateEnumCreateFailed CustomPluginStateEnum = "CREATE_FAILED"
	CustomPluginStateEnumActive       CustomPluginStateEnum = "ACTIVE"
	CustomPluginStateEnumUpdating     CustomPluginStateEnum = "UPDATING"
	CustomPluginStateEnumUpdateFailed CustomPluginStateEnum = "UPDATE_FAILED"
	CustomPluginStateEnumDeleting     CustomPluginStateEnum = "DELETING"
)
