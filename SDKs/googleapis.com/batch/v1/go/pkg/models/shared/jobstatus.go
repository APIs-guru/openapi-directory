package shared

type JobStatusStateEnum string

const (
	JobStatusStateEnumStateUnspecified   JobStatusStateEnum = "STATE_UNSPECIFIED"
	JobStatusStateEnumQueued             JobStatusStateEnum = "QUEUED"
	JobStatusStateEnumScheduled          JobStatusStateEnum = "SCHEDULED"
	JobStatusStateEnumRunning            JobStatusStateEnum = "RUNNING"
	JobStatusStateEnumSucceeded          JobStatusStateEnum = "SUCCEEDED"
	JobStatusStateEnumFailed             JobStatusStateEnum = "FAILED"
	JobStatusStateEnumDeletionInProgress JobStatusStateEnum = "DELETION_IN_PROGRESS"
)

// JobStatus
// Job status.
type JobStatus struct {
	RunDuration  *string                    `json:"runDuration,omitempty"`
	State        *JobStatusStateEnum        `json:"state,omitempty"`
	StatusEvents []StatusEvent              `json:"statusEvents,omitempty"`
	TaskGroups   map[string]TaskGroupStatus `json:"taskGroups,omitempty"`
}
