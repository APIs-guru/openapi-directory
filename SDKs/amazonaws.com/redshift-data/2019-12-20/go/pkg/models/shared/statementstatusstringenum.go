package shared

type StatementStatusStringEnum string

const (
	StatementStatusStringEnumSubmitted StatementStatusStringEnum = "SUBMITTED"
	StatementStatusStringEnumPicked    StatementStatusStringEnum = "PICKED"
	StatementStatusStringEnumStarted   StatementStatusStringEnum = "STARTED"
	StatementStatusStringEnumFinished  StatementStatusStringEnum = "FINISHED"
	StatementStatusStringEnumAborted   StatementStatusStringEnum = "ABORTED"
	StatementStatusStringEnumFailed    StatementStatusStringEnum = "FAILED"
)
