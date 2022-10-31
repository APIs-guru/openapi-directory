package shared

type StatusEnum string

const (
	StatusEnumRetried            StatusEnum = "retried"
	StatusEnumCanceled           StatusEnum = "canceled"
	StatusEnumInfrastructureFail StatusEnum = "infrastructure_fail"
	StatusEnumTimedout           StatusEnum = "timedout"
	StatusEnumNotRun             StatusEnum = "not_run"
	StatusEnumRunning            StatusEnum = "running"
	StatusEnumFailed             StatusEnum = "failed"
	StatusEnumQueued             StatusEnum = "queued"
	StatusEnumScheduled          StatusEnum = "scheduled"
	StatusEnumNotRunning         StatusEnum = "not_running"
	StatusEnumNoTests            StatusEnum = "no_tests"
	StatusEnumFixed              StatusEnum = "fixed"
	StatusEnumSuccess            StatusEnum = "success"
)
