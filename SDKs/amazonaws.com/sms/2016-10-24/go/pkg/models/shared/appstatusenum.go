package shared




type AppStatusEnum string

const (
    AppStatusEnumCreating AppStatusEnum = "CREATING"
AppStatusEnumActive AppStatusEnum = "ACTIVE"
AppStatusEnumUpdating AppStatusEnum = "UPDATING"
AppStatusEnumDeleting AppStatusEnum = "DELETING"
AppStatusEnumDeleted AppStatusEnum = "DELETED"
AppStatusEnumDeleteFailed AppStatusEnum = "DELETE_FAILED"
)


