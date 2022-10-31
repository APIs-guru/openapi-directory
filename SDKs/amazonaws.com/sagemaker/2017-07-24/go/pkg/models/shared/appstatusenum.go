package shared




type AppStatusEnum string

const (
    AppStatusEnumDeleted AppStatusEnum = "Deleted"
AppStatusEnumDeleting AppStatusEnum = "Deleting"
AppStatusEnumFailed AppStatusEnum = "Failed"
AppStatusEnumInService AppStatusEnum = "InService"
AppStatusEnumPending AppStatusEnum = "Pending"
)


