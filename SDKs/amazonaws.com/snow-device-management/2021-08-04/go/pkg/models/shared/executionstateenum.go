package shared




type ExecutionStateEnum string

const (
    ExecutionStateEnumQueued ExecutionStateEnum = "QUEUED"
ExecutionStateEnumInProgress ExecutionStateEnum = "IN_PROGRESS"
ExecutionStateEnumCanceled ExecutionStateEnum = "CANCELED"
ExecutionStateEnumFailed ExecutionStateEnum = "FAILED"
ExecutionStateEnumSucceeded ExecutionStateEnum = "SUCCEEDED"
ExecutionStateEnumRejected ExecutionStateEnum = "REJECTED"
ExecutionStateEnumTimedOut ExecutionStateEnum = "TIMED_OUT"
)


