package shared

type WorkflowExecutionContinuedAsNewEventAttributes struct {
	ChildPolicy                  ChildPolicyEnum `json:"childPolicy"`
	DecisionTaskCompletedEventID int64           `json:"decisionTaskCompletedEventId"`
	ExecutionStartToCloseTimeout *string         `json:"executionStartToCloseTimeout,omitempty"`
	Input                        *string         `json:"input,omitempty"`
	LambdaRole                   *string         `json:"lambdaRole,omitempty"`
	NewExecutionRunID            string          `json:"newExecutionRunId"`
	TagList                      []string        `json:"tagList,omitempty"`
	TaskList                     TaskList        `json:"taskList"`
	TaskPriority                 *string         `json:"taskPriority,omitempty"`
	TaskStartToCloseTimeout      *string         `json:"taskStartToCloseTimeout,omitempty"`
	WorkflowType                 WorkflowType    `json:"workflowType"`
}
