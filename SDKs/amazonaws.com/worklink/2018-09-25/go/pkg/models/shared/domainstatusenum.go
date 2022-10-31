package shared




type DomainStatusEnum string

const (
    DomainStatusEnumPendingValidation DomainStatusEnum = "PENDING_VALIDATION"
DomainStatusEnumAssociating DomainStatusEnum = "ASSOCIATING"
DomainStatusEnumActive DomainStatusEnum = "ACTIVE"
DomainStatusEnumInactive DomainStatusEnum = "INACTIVE"
DomainStatusEnumDisassociating DomainStatusEnum = "DISASSOCIATING"
DomainStatusEnumDisassociated DomainStatusEnum = "DISASSOCIATED"
DomainStatusEnumFailedToAssociate DomainStatusEnum = "FAILED_TO_ASSOCIATE"
DomainStatusEnumFailedToDisassociate DomainStatusEnum = "FAILED_TO_DISASSOCIATE"
)


