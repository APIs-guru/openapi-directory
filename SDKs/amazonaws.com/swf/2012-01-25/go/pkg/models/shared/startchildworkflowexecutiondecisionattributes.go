package shared

type StartChildWorkflowExecutionDecisionAttributes struct {
	ChildPolicy                  *ChildPolicyEnum `json:"childPolicy"`
	Control                      *string          `json:"control"`
	ExecutionStartToCloseTimeout *string          `json:"executionStartToCloseTimeout"`
	Input                        *string          `json:"input"`
	LambdaRole                   *string          `json:"lambdaRole"`
	TagList                      []string         `json:"tagList"`
	TaskList                     *TaskList        `json:"taskList"`
	TaskPriority                 *string          `json:"taskPriority"`
	TaskStartToCloseTimeout      *string          `json:"taskStartToCloseTimeout"`
	WorkflowID                   string           `json:"workflowId"`
	WorkflowType                 WorkflowType     `json:"workflowType"`
}
