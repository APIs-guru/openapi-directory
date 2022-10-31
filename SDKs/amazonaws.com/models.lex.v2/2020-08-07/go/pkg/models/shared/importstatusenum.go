package shared




type ImportStatusEnum string

const (
    ImportStatusEnumInProgress ImportStatusEnum = "InProgress"
ImportStatusEnumCompleted ImportStatusEnum = "Completed"
ImportStatusEnumFailed ImportStatusEnum = "Failed"
ImportStatusEnumDeleting ImportStatusEnum = "Deleting"
)


