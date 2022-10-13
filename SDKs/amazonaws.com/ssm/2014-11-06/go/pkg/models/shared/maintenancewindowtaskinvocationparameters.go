package shared

type MaintenanceWindowTaskInvocationParameters struct {
	Automation    *MaintenanceWindowAutomationParameters    `json:"Automation"`
	Lambda        *MaintenanceWindowLambdaParameters        `json:"Lambda"`
	RunCommand    *MaintenanceWindowRunCommandParameters    `json:"RunCommand"`
	StepFunctions *MaintenanceWindowStepFunctionsParameters `json:"StepFunctions"`
}
