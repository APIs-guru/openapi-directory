package shared




type OpsItemStatusEnum string

const (
    OpsItemStatusEnumOpen OpsItemStatusEnum = "Open"
OpsItemStatusEnumInProgress OpsItemStatusEnum = "InProgress"
OpsItemStatusEnumResolved OpsItemStatusEnum = "Resolved"
OpsItemStatusEnumPending OpsItemStatusEnum = "Pending"
OpsItemStatusEnumTimedOut OpsItemStatusEnum = "TimedOut"
OpsItemStatusEnumCancelling OpsItemStatusEnum = "Cancelling"
OpsItemStatusEnumCancelled OpsItemStatusEnum = "Cancelled"
OpsItemStatusEnumFailed OpsItemStatusEnum = "Failed"
OpsItemStatusEnumCompletedWithSuccess OpsItemStatusEnum = "CompletedWithSuccess"
OpsItemStatusEnumCompletedWithFailure OpsItemStatusEnum = "CompletedWithFailure"
OpsItemStatusEnumScheduled OpsItemStatusEnum = "Scheduled"
OpsItemStatusEnumRunbookInProgress OpsItemStatusEnum = "RunbookInProgress"
OpsItemStatusEnumPendingChangeCalendarOverride OpsItemStatusEnum = "PendingChangeCalendarOverride"
OpsItemStatusEnumChangeCalendarOverrideApproved OpsItemStatusEnum = "ChangeCalendarOverrideApproved"
OpsItemStatusEnumChangeCalendarOverrideRejected OpsItemStatusEnum = "ChangeCalendarOverrideRejected"
OpsItemStatusEnumPendingApproval OpsItemStatusEnum = "PendingApproval"
OpsItemStatusEnumApproved OpsItemStatusEnum = "Approved"
OpsItemStatusEnumRejected OpsItemStatusEnum = "Rejected"
OpsItemStatusEnumClosed OpsItemStatusEnum = "Closed"
)


