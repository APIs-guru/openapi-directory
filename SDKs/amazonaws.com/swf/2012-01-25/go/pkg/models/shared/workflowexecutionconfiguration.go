package shared

// WorkflowExecutionConfiguration
// The configuration settings for a workflow execution including timeout values, tasklist etc. These configuration settings are determined from the defaults specified when registering the workflow type and those specified when starting the workflow execution.
type WorkflowExecutionConfiguration struct {
	ChildPolicy                  ChildPolicyEnum `json:"childPolicy"`
	ExecutionStartToCloseTimeout string          `json:"executionStartToCloseTimeout"`
	LambdaRole                   *string         `json:"lambdaRole,omitempty"`
	TaskList                     TaskList        `json:"taskList"`
	TaskPriority                 *string         `json:"taskPriority,omitempty"`
	TaskStartToCloseTimeout      string          `json:"taskStartToCloseTimeout"`
}
