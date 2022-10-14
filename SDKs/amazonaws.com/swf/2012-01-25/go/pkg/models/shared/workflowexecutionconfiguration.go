package shared

type WorkflowExecutionConfiguration struct {
	ChildPolicy                  ChildPolicyEnum `json:"childPolicy"`
	ExecutionStartToCloseTimeout string          `json:"executionStartToCloseTimeout"`
	LambdaRole                   *string         `json:"lambdaRole,omitempty"`
	TaskList                     TaskList        `json:"taskList"`
	TaskPriority                 *string         `json:"taskPriority,omitempty"`
	TaskStartToCloseTimeout      string          `json:"taskStartToCloseTimeout"`
}
