package shared

type AutomationExecutionStatusEnum string

const (
	AutomationExecutionStatusEnumPending                        AutomationExecutionStatusEnum = "Pending"
	AutomationExecutionStatusEnumInProgress                     AutomationExecutionStatusEnum = "InProgress"
	AutomationExecutionStatusEnumWaiting                        AutomationExecutionStatusEnum = "Waiting"
	AutomationExecutionStatusEnumSuccess                        AutomationExecutionStatusEnum = "Success"
	AutomationExecutionStatusEnumTimedOut                       AutomationExecutionStatusEnum = "TimedOut"
	AutomationExecutionStatusEnumCancelling                     AutomationExecutionStatusEnum = "Cancelling"
	AutomationExecutionStatusEnumCancelled                      AutomationExecutionStatusEnum = "Cancelled"
	AutomationExecutionStatusEnumFailed                         AutomationExecutionStatusEnum = "Failed"
	AutomationExecutionStatusEnumPendingApproval                AutomationExecutionStatusEnum = "PendingApproval"
	AutomationExecutionStatusEnumApproved                       AutomationExecutionStatusEnum = "Approved"
	AutomationExecutionStatusEnumRejected                       AutomationExecutionStatusEnum = "Rejected"
	AutomationExecutionStatusEnumScheduled                      AutomationExecutionStatusEnum = "Scheduled"
	AutomationExecutionStatusEnumRunbookInProgress              AutomationExecutionStatusEnum = "RunbookInProgress"
	AutomationExecutionStatusEnumPendingChangeCalendarOverride  AutomationExecutionStatusEnum = "PendingChangeCalendarOverride"
	AutomationExecutionStatusEnumChangeCalendarOverrideApproved AutomationExecutionStatusEnum = "ChangeCalendarOverrideApproved"
	AutomationExecutionStatusEnumChangeCalendarOverrideRejected AutomationExecutionStatusEnum = "ChangeCalendarOverrideRejected"
	AutomationExecutionStatusEnumCompletedWithSuccess           AutomationExecutionStatusEnum = "CompletedWithSuccess"
	AutomationExecutionStatusEnumCompletedWithFailure           AutomationExecutionStatusEnum = "CompletedWithFailure"
)
