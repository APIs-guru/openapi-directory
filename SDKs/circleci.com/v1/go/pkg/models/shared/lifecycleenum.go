package shared

type LifecycleEnum string

const (
	LifecycleEnumQueued     LifecycleEnum = "queued"
	LifecycleEnumScheduled  LifecycleEnum = "scheduled"
	LifecycleEnumNotRun     LifecycleEnum = "not_run"
	LifecycleEnumNotRunning LifecycleEnum = "not_running"
	LifecycleEnumRunning    LifecycleEnum = "running"
	LifecycleEnumFinished   LifecycleEnum = "finished"
)
