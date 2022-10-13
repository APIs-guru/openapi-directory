package shared

type StartChildWorkflowExecutionInitiatedEventAttributes struct {
	ChildPolicy                  ChildPolicyEnum `json:"childPolicy"`
	Control                      *string         `json:"control"`
	DecisionTaskCompletedEventID int64           `json:"decisionTaskCompletedEventId"`
	ExecutionStartToCloseTimeout *string         `json:"executionStartToCloseTimeout"`
	Input                        *string         `json:"input"`
	LambdaRole                   *string         `json:"lambdaRole"`
	TagList                      []string        `json:"tagList"`
	TaskList                     TaskList        `json:"taskList"`
	TaskPriority                 *string         `json:"taskPriority"`
	TaskStartToCloseTimeout      *string         `json:"taskStartToCloseTimeout"`
	WorkflowID                   string          `json:"workflowId"`
	WorkflowType                 WorkflowType    `json:"workflowType"`
}
