package shared

type MaintenanceWindowTaskTypeEnum string

const (
	MaintenanceWindowTaskTypeEnumRunCommand    MaintenanceWindowTaskTypeEnum = "RUN_COMMAND"
	MaintenanceWindowTaskTypeEnumAutomation    MaintenanceWindowTaskTypeEnum = "AUTOMATION"
	MaintenanceWindowTaskTypeEnumStepFunctions MaintenanceWindowTaskTypeEnum = "STEP_FUNCTIONS"
	MaintenanceWindowTaskTypeEnumLambda        MaintenanceWindowTaskTypeEnum = "LAMBDA"
)
