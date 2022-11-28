package shared

type TaskStatusStateEnum string

const (
	TaskStatusStateEnumStateUnspecified TaskStatusStateEnum = "STATE_UNSPECIFIED"
	TaskStatusStateEnumPending          TaskStatusStateEnum = "PENDING"
	TaskStatusStateEnumAssigned         TaskStatusStateEnum = "ASSIGNED"
	TaskStatusStateEnumRunning          TaskStatusStateEnum = "RUNNING"
	TaskStatusStateEnumFailed           TaskStatusStateEnum = "FAILED"
	TaskStatusStateEnumSucceeded        TaskStatusStateEnum = "SUCCEEDED"
)

// TaskStatus
// Status of a task
type TaskStatus struct {
	State        *TaskStatusStateEnum `json:"state,omitempty"`
	StatusEvents []StatusEvent        `json:"statusEvents,omitempty"`
}
