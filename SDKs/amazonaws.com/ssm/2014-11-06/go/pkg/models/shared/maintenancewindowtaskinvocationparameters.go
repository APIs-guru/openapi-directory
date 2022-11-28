package shared

// MaintenanceWindowTaskInvocationParameters
// The parameters for task execution.
type MaintenanceWindowTaskInvocationParameters struct {
	Automation    *MaintenanceWindowAutomationParameters    `json:"Automation,omitempty"`
	Lambda        *MaintenanceWindowLambdaParameters        `json:"Lambda,omitempty"`
	RunCommand    *MaintenanceWindowRunCommandParameters    `json:"RunCommand,omitempty"`
	StepFunctions *MaintenanceWindowStepFunctionsParameters `json:"StepFunctions,omitempty"`
}
