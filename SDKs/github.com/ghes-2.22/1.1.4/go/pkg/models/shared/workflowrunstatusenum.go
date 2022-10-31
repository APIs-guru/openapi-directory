package shared




type WorkflowRunStatusEnum string

const (
    WorkflowRunStatusEnumCompleted WorkflowRunStatusEnum = "completed"
WorkflowRunStatusEnumActionRequired WorkflowRunStatusEnum = "action_required"
WorkflowRunStatusEnumCancelled WorkflowRunStatusEnum = "cancelled"
WorkflowRunStatusEnumFailure WorkflowRunStatusEnum = "failure"
WorkflowRunStatusEnumNeutral WorkflowRunStatusEnum = "neutral"
WorkflowRunStatusEnumSkipped WorkflowRunStatusEnum = "skipped"
WorkflowRunStatusEnumStale WorkflowRunStatusEnum = "stale"
WorkflowRunStatusEnumSuccess WorkflowRunStatusEnum = "success"
WorkflowRunStatusEnumTimedOut WorkflowRunStatusEnum = "timed_out"
WorkflowRunStatusEnumInProgress WorkflowRunStatusEnum = "in_progress"
WorkflowRunStatusEnumQueued WorkflowRunStatusEnum = "queued"
WorkflowRunStatusEnumRequested WorkflowRunStatusEnum = "requested"
WorkflowRunStatusEnumWaiting WorkflowRunStatusEnum = "waiting"
)


