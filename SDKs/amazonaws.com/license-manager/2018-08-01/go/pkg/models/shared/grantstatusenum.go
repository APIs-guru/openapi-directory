package shared




type GrantStatusEnum string

const (
    GrantStatusEnumPendingWorkflow GrantStatusEnum = "PENDING_WORKFLOW"
GrantStatusEnumPendingAccept GrantStatusEnum = "PENDING_ACCEPT"
GrantStatusEnumRejected GrantStatusEnum = "REJECTED"
GrantStatusEnumActive GrantStatusEnum = "ACTIVE"
GrantStatusEnumFailedWorkflow GrantStatusEnum = "FAILED_WORKFLOW"
GrantStatusEnumDeleted GrantStatusEnum = "DELETED"
GrantStatusEnumPendingDelete GrantStatusEnum = "PENDING_DELETE"
GrantStatusEnumDisabled GrantStatusEnum = "DISABLED"
GrantStatusEnumWorkflowCompleted GrantStatusEnum = "WORKFLOW_COMPLETED"
)


