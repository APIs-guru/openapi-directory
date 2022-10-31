package shared




type ReceivedStatusEnum string

const (
    ReceivedStatusEnumPendingWorkflow ReceivedStatusEnum = "PENDING_WORKFLOW"
ReceivedStatusEnumPendingAccept ReceivedStatusEnum = "PENDING_ACCEPT"
ReceivedStatusEnumRejected ReceivedStatusEnum = "REJECTED"
ReceivedStatusEnumActive ReceivedStatusEnum = "ACTIVE"
ReceivedStatusEnumFailedWorkflow ReceivedStatusEnum = "FAILED_WORKFLOW"
ReceivedStatusEnumDeleted ReceivedStatusEnum = "DELETED"
ReceivedStatusEnumDisabled ReceivedStatusEnum = "DISABLED"
ReceivedStatusEnumWorkflowCompleted ReceivedStatusEnum = "WORKFLOW_COMPLETED"
)


