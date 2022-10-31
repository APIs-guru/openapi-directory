package shared




type StatusStringEnum string

const (
    StatusStringEnumSubmitted StatusStringEnum = "SUBMITTED"
StatusStringEnumPicked StatusStringEnum = "PICKED"
StatusStringEnumStarted StatusStringEnum = "STARTED"
StatusStringEnumFinished StatusStringEnum = "FINISHED"
StatusStringEnumAborted StatusStringEnum = "ABORTED"
StatusStringEnumFailed StatusStringEnum = "FAILED"
StatusStringEnumAll StatusStringEnum = "ALL"
)


