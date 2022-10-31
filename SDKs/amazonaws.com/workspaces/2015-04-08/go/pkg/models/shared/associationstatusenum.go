package shared




type AssociationStatusEnum string

const (
    AssociationStatusEnumNotAssociated AssociationStatusEnum = "NOT_ASSOCIATED"
AssociationStatusEnumAssociatedWithOwnerAccount AssociationStatusEnum = "ASSOCIATED_WITH_OWNER_ACCOUNT"
AssociationStatusEnumAssociatedWithSharedAccount AssociationStatusEnum = "ASSOCIATED_WITH_SHARED_ACCOUNT"
AssociationStatusEnumPendingAssociation AssociationStatusEnum = "PENDING_ASSOCIATION"
AssociationStatusEnumPendingDisassociation AssociationStatusEnum = "PENDING_DISASSOCIATION"
)


