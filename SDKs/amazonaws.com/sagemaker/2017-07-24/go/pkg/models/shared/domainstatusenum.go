package shared




type DomainStatusEnum string

const (
    DomainStatusEnumDeleting DomainStatusEnum = "Deleting"
DomainStatusEnumFailed DomainStatusEnum = "Failed"
DomainStatusEnumInService DomainStatusEnum = "InService"
DomainStatusEnumPending DomainStatusEnum = "Pending"
DomainStatusEnumUpdating DomainStatusEnum = "Updating"
DomainStatusEnumUpdateFailed DomainStatusEnum = "Update_Failed"
DomainStatusEnumDeleteFailed DomainStatusEnum = "Delete_Failed"
)


