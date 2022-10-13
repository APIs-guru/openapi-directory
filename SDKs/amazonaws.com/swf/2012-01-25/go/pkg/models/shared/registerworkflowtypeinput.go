package shared

type RegisterWorkflowTypeInput struct {
	DefaultChildPolicy                  *ChildPolicyEnum `json:"defaultChildPolicy"`
	DefaultExecutionStartToCloseTimeout *string          `json:"defaultExecutionStartToCloseTimeout"`
	DefaultLambdaRole                   *string          `json:"defaultLambdaRole"`
	DefaultTaskList                     *TaskList        `json:"defaultTaskList"`
	DefaultTaskPriority                 *string          `json:"defaultTaskPriority"`
	DefaultTaskStartToCloseTimeout      *string          `json:"defaultTaskStartToCloseTimeout"`
	Description                         *string          `json:"description"`
	Domain                              string           `json:"domain"`
	Name                                string           `json:"name"`
	Version                             string           `json:"version"`
}
