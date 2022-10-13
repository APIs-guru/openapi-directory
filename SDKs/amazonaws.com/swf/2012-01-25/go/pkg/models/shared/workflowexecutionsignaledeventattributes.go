package shared

type WorkflowExecutionSignaledEventAttributes struct {
	ExternalInitiatedEventID  *int64             `json:"externalInitiatedEventId"`
	ExternalWorkflowExecution *WorkflowExecution `json:"externalWorkflowExecution"`
	Input                     *string            `json:"input"`
	SignalName                string             `json:"signalName"`
}
