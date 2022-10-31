package shared




type UserProfileStatusEnum string

const (
    UserProfileStatusEnumDeleting UserProfileStatusEnum = "Deleting"
UserProfileStatusEnumFailed UserProfileStatusEnum = "Failed"
UserProfileStatusEnumInService UserProfileStatusEnum = "InService"
UserProfileStatusEnumPending UserProfileStatusEnum = "Pending"
UserProfileStatusEnumUpdating UserProfileStatusEnum = "Updating"
UserProfileStatusEnumUpdateFailed UserProfileStatusEnum = "Update_Failed"
UserProfileStatusEnumDeleteFailed UserProfileStatusEnum = "Delete_Failed"
)


