package shared

type WorkflowExecutionStartedEventAttributes struct {
	ChildPolicy                  ChildPolicyEnum    `json:"childPolicy"`
	ContinuedExecutionRunID      *string            `json:"continuedExecutionRunId,omitempty"`
	ExecutionStartToCloseTimeout *string            `json:"executionStartToCloseTimeout,omitempty"`
	Input                        *string            `json:"input,omitempty"`
	LambdaRole                   *string            `json:"lambdaRole,omitempty"`
	ParentInitiatedEventID       *int64             `json:"parentInitiatedEventId,omitempty"`
	ParentWorkflowExecution      *WorkflowExecution `json:"parentWorkflowExecution,omitempty"`
	TagList                      []string           `json:"tagList,omitempty"`
	TaskList                     TaskList           `json:"taskList"`
	TaskPriority                 *string            `json:"taskPriority,omitempty"`
	TaskStartToCloseTimeout      *string            `json:"taskStartToCloseTimeout,omitempty"`
	WorkflowType                 WorkflowType       `json:"workflowType"`
}
