package shared

type WorkflowExecutionContinuedAsNewEventAttributes struct {
	ChildPolicy                  ChildPolicyEnum `json:"childPolicy"`
	DecisionTaskCompletedEventID int64           `json:"decisionTaskCompletedEventId"`
	ExecutionStartToCloseTimeout *string         `json:"executionStartToCloseTimeout"`
	Input                        *string         `json:"input"`
	LambdaRole                   *string         `json:"lambdaRole"`
	NewExecutionRunID            string          `json:"newExecutionRunId"`
	TagList                      []string        `json:"tagList"`
	TaskList                     TaskList        `json:"taskList"`
	TaskPriority                 *string         `json:"taskPriority"`
	TaskStartToCloseTimeout      *string         `json:"taskStartToCloseTimeout"`
	WorkflowType                 WorkflowType    `json:"workflowType"`
}
