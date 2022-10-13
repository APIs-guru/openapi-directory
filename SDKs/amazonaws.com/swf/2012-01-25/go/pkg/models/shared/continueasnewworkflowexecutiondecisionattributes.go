package shared

type ContinueAsNewWorkflowExecutionDecisionAttributes struct {
	ChildPolicy                  *ChildPolicyEnum `json:"childPolicy"`
	ExecutionStartToCloseTimeout *string          `json:"executionStartToCloseTimeout"`
	Input                        *string          `json:"input"`
	LambdaRole                   *string          `json:"lambdaRole"`
	TagList                      []string         `json:"tagList"`
	TaskList                     *TaskList        `json:"taskList"`
	TaskPriority                 *string          `json:"taskPriority"`
	TaskStartToCloseTimeout      *string          `json:"taskStartToCloseTimeout"`
	WorkflowTypeVersion          *string          `json:"workflowTypeVersion"`
}
