package shared




type ShareStatusEnum string

const (
    ShareStatusEnumNotStarted ShareStatusEnum = "NOT_STARTED"
ShareStatusEnumInProgress ShareStatusEnum = "IN_PROGRESS"
ShareStatusEnumCompleted ShareStatusEnum = "COMPLETED"
ShareStatusEnumCompletedWithErrors ShareStatusEnum = "COMPLETED_WITH_ERRORS"
ShareStatusEnumError ShareStatusEnum = "ERROR"
)


