package shared

type StartWorkflowExecutionInput struct {
	ChildPolicy                  *ChildPolicyEnum `json:"childPolicy"`
	Domain                       string           `json:"domain"`
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
