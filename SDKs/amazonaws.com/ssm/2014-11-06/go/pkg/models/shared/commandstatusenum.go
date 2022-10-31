package shared




type CommandStatusEnum string

const (
    CommandStatusEnumPending CommandStatusEnum = "Pending"
CommandStatusEnumInProgress CommandStatusEnum = "InProgress"
CommandStatusEnumSuccess CommandStatusEnum = "Success"
CommandStatusEnumCancelled CommandStatusEnum = "Cancelled"
CommandStatusEnumFailed CommandStatusEnum = "Failed"
CommandStatusEnumTimedOut CommandStatusEnum = "TimedOut"
CommandStatusEnumCancelling CommandStatusEnum = "Cancelling"
)


