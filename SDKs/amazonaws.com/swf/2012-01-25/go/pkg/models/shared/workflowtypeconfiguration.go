package shared

// WorkflowTypeConfiguration
// The configuration settings of a workflow type.
type WorkflowTypeConfiguration struct {
	DefaultChildPolicy                  *ChildPolicyEnum `json:"defaultChildPolicy,omitempty"`
	DefaultExecutionStartToCloseTimeout *string          `json:"defaultExecutionStartToCloseTimeout,omitempty"`
	DefaultLambdaRole                   *string          `json:"defaultLambdaRole,omitempty"`
	DefaultTaskList                     *TaskList        `json:"defaultTaskList,omitempty"`
	DefaultTaskPriority                 *string          `json:"defaultTaskPriority,omitempty"`
	DefaultTaskStartToCloseTimeout      *string          `json:"defaultTaskStartToCloseTimeout,omitempty"`
}
