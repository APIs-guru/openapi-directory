package shared

type SendAutomationSignalRequest struct {
	AutomationExecutionID string              `json:"AutomationExecutionId"`
	Payload               map[string][]string `json:"Payload"`
	SignalType            SignalTypeEnum      `json:"SignalType"`
}
