package shared

// StartChildWorkflowExecutionInitiatedEventAttributes
// Provides the details of the <code>StartChildWorkflowExecutionInitiated</code> event.
type StartChildWorkflowExecutionInitiatedEventAttributes struct {
	ChildPolicy                  ChildPolicyEnum `json:"childPolicy"`
	Control                      *string         `json:"control,omitempty"`
	DecisionTaskCompletedEventID int64           `json:"decisionTaskCompletedEventId"`
	ExecutionStartToCloseTimeout *string         `json:"executionStartToCloseTimeout,omitempty"`
	Input                        *string         `json:"input,omitempty"`
	LambdaRole                   *string         `json:"lambdaRole,omitempty"`
	TagList                      []string        `json:"tagList,omitempty"`
	TaskList                     TaskList        `json:"taskList"`
	TaskPriority                 *string         `json:"taskPriority,omitempty"`
	TaskStartToCloseTimeout      *string         `json:"taskStartToCloseTimeout,omitempty"`
	WorkflowID                   string          `json:"workflowId"`
	WorkflowType                 WorkflowType    `json:"workflowType"`
}
