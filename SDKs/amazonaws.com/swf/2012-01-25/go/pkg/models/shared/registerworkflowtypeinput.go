package shared

type RegisterWorkflowTypeInput struct {
	DefaultChildPolicy                  *ChildPolicyEnum `json:"defaultChildPolicy,omitempty"`
	DefaultExecutionStartToCloseTimeout *string          `json:"defaultExecutionStartToCloseTimeout,omitempty"`
	DefaultLambdaRole                   *string          `json:"defaultLambdaRole,omitempty"`
	DefaultTaskList                     *TaskList        `json:"defaultTaskList,omitempty"`
	DefaultTaskPriority                 *string          `json:"defaultTaskPriority,omitempty"`
	DefaultTaskStartToCloseTimeout      *string          `json:"defaultTaskStartToCloseTimeout,omitempty"`
	Description                         *string          `json:"description,omitempty"`
	Domain                              string           `json:"domain"`
	Name                                string           `json:"name"`
	Version                             string           `json:"version"`
}
