package shared

type StopAutomationExecutionRequest struct {
	AutomationExecutionID string        `json:"AutomationExecutionId"`
	Type                  *StopTypeEnum `json:"Type,omitempty"`
}
