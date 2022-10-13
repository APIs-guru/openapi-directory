package shared

type WorkflowExecutionStartedEventAttributes struct {
	ChildPolicy                  ChildPolicyEnum    `json:"childPolicy"`
	ContinuedExecutionRunID      *string            `json:"continuedExecutionRunId"`
	ExecutionStartToCloseTimeout *string            `json:"executionStartToCloseTimeout"`
	Input                        *string            `json:"input"`
	LambdaRole                   *string            `json:"lambdaRole"`
	ParentInitiatedEventID       *int64             `json:"parentInitiatedEventId"`
	ParentWorkflowExecution      *WorkflowExecution `json:"parentWorkflowExecution"`
	TagList                      []string           `json:"tagList"`
	TaskList                     TaskList           `json:"taskList"`
	TaskPriority                 *string            `json:"taskPriority"`
	TaskStartToCloseTimeout      *string            `json:"taskStartToCloseTimeout"`
	WorkflowType                 WorkflowType       `json:"workflowType"`
}
