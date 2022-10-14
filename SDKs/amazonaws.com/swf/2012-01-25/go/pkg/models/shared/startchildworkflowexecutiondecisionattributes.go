package shared

type StartChildWorkflowExecutionDecisionAttributes struct {
	ChildPolicy                  *ChildPolicyEnum `json:"childPolicy,omitempty"`
	Control                      *string          `json:"control,omitempty"`
	ExecutionStartToCloseTimeout *string          `json:"executionStartToCloseTimeout,omitempty"`
	Input                        *string          `json:"input,omitempty"`
	LambdaRole                   *string          `json:"lambdaRole,omitempty"`
	TagList                      []string         `json:"tagList,omitempty"`
	TaskList                     *TaskList        `json:"taskList,omitempty"`
	TaskPriority                 *string          `json:"taskPriority,omitempty"`
	TaskStartToCloseTimeout      *string          `json:"taskStartToCloseTimeout,omitempty"`
	WorkflowID                   string           `json:"workflowId"`
	WorkflowType                 WorkflowType     `json:"workflowType"`
}
