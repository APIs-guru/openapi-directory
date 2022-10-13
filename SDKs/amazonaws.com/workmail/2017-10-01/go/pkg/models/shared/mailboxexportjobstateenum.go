package shared

type MailboxExportJobStateEnum string

const (
	MailboxExportJobStateEnumRunning   MailboxExportJobStateEnum = "RUNNING"
	MailboxExportJobStateEnumCompleted MailboxExportJobStateEnum = "COMPLETED"
	MailboxExportJobStateEnumFailed    MailboxExportJobStateEnum = "FAILED"
	MailboxExportJobStateEnumCancelled MailboxExportJobStateEnum = "CANCELLED"
)
