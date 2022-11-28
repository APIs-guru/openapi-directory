package shared

type MessageNewJobStateEnum string

const (
	MessageNewJobStateEnumStateUnspecified   MessageNewJobStateEnum = "STATE_UNSPECIFIED"
	MessageNewJobStateEnumQueued             MessageNewJobStateEnum = "QUEUED"
	MessageNewJobStateEnumScheduled          MessageNewJobStateEnum = "SCHEDULED"
	MessageNewJobStateEnumRunning            MessageNewJobStateEnum = "RUNNING"
	MessageNewJobStateEnumSucceeded          MessageNewJobStateEnum = "SUCCEEDED"
	MessageNewJobStateEnumFailed             MessageNewJobStateEnum = "FAILED"
	MessageNewJobStateEnumDeletionInProgress MessageNewJobStateEnum = "DELETION_IN_PROGRESS"
)

type MessageNewTaskStateEnum string

const (
	MessageNewTaskStateEnumStateUnspecified MessageNewTaskStateEnum = "STATE_UNSPECIFIED"
	MessageNewTaskStateEnumPending          MessageNewTaskStateEnum = "PENDING"
	MessageNewTaskStateEnumAssigned         MessageNewTaskStateEnum = "ASSIGNED"
	MessageNewTaskStateEnumRunning          MessageNewTaskStateEnum = "RUNNING"
	MessageNewTaskStateEnumFailed           MessageNewTaskStateEnum = "FAILED"
	MessageNewTaskStateEnumSucceeded        MessageNewTaskStateEnum = "SUCCEEDED"
)

type MessageTypeEnum string

const (
	MessageTypeEnumTypeUnspecified  MessageTypeEnum = "TYPE_UNSPECIFIED"
	MessageTypeEnumJobStateChanged  MessageTypeEnum = "JOB_STATE_CHANGED"
	MessageTypeEnumTaskStateChanged MessageTypeEnum = "TASK_STATE_CHANGED"
)

// Message
// Message details. Describe the attribute that a message should have. Without specified message attributes, no message will be sent by default.
type Message struct {
	NewJobState  *MessageNewJobStateEnum  `json:"newJobState,omitempty"`
	NewTaskState *MessageNewTaskStateEnum `json:"newTaskState,omitempty"`
	Type         *MessageTypeEnum         `json:"type,omitempty"`
}
