package shared




type CommandInvocationStatusEnum string

const (
    CommandInvocationStatusEnumPending CommandInvocationStatusEnum = "Pending"
CommandInvocationStatusEnumInProgress CommandInvocationStatusEnum = "InProgress"
CommandInvocationStatusEnumDelayed CommandInvocationStatusEnum = "Delayed"
CommandInvocationStatusEnumSuccess CommandInvocationStatusEnum = "Success"
CommandInvocationStatusEnumCancelled CommandInvocationStatusEnum = "Cancelled"
CommandInvocationStatusEnumTimedOut CommandInvocationStatusEnum = "TimedOut"
CommandInvocationStatusEnumFailed CommandInvocationStatusEnum = "Failed"
CommandInvocationStatusEnumCancelling CommandInvocationStatusEnum = "Cancelling"
)


