package shared

// TaskExecution
// This Task Execution field includes detail information for task execution procedures, based on StatusEvent types.
type TaskExecution struct {
	ExitCode *int32 `json:"exitCode,omitempty"`
}
