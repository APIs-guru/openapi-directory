package shared

type WorkflowTypeConfiguration struct {
	DefaultChildPolicy                  *ChildPolicyEnum `json:"defaultChildPolicy"`
	DefaultExecutionStartToCloseTimeout *string          `json:"defaultExecutionStartToCloseTimeout"`
	DefaultLambdaRole                   *string          `json:"defaultLambdaRole"`
	DefaultTaskList                     *TaskList        `json:"defaultTaskList"`
	DefaultTaskPriority                 *string          `json:"defaultTaskPriority"`
	DefaultTaskStartToCloseTimeout      *string          `json:"defaultTaskStartToCloseTimeout"`
}
