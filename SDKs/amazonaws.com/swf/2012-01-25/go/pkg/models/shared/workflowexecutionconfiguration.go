package shared

type WorkflowExecutionConfiguration struct {
	ChildPolicy                  ChildPolicyEnum `json:"childPolicy"`
	ExecutionStartToCloseTimeout string          `json:"executionStartToCloseTimeout"`
	LambdaRole                   *string         `json:"lambdaRole"`
	TaskList                     TaskList        `json:"taskList"`
	TaskPriority                 *string         `json:"taskPriority"`
	TaskStartToCloseTimeout      string          `json:"taskStartToCloseTimeout"`
}
