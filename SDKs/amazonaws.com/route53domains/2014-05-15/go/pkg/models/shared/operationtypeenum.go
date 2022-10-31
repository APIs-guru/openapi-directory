package shared




type OperationTypeEnum string

const (
    OperationTypeEnumRegisterDomain OperationTypeEnum = "REGISTER_DOMAIN"
OperationTypeEnumDeleteDomain OperationTypeEnum = "DELETE_DOMAIN"
OperationTypeEnumTransferInDomain OperationTypeEnum = "TRANSFER_IN_DOMAIN"
OperationTypeEnumUpdateDomainContact OperationTypeEnum = "UPDATE_DOMAIN_CONTACT"
OperationTypeEnumUpdateNameserver OperationTypeEnum = "UPDATE_NAMESERVER"
OperationTypeEnumChangePrivacyProtection OperationTypeEnum = "CHANGE_PRIVACY_PROTECTION"
OperationTypeEnumDomainLock OperationTypeEnum = "DOMAIN_LOCK"
OperationTypeEnumEnableAutorenew OperationTypeEnum = "ENABLE_AUTORENEW"
OperationTypeEnumDisableAutorenew OperationTypeEnum = "DISABLE_AUTORENEW"
OperationTypeEnumAddDnssec OperationTypeEnum = "ADD_DNSSEC"
OperationTypeEnumRemoveDnssec OperationTypeEnum = "REMOVE_DNSSEC"
OperationTypeEnumExpireDomain OperationTypeEnum = "EXPIRE_DOMAIN"
OperationTypeEnumTransferOutDomain OperationTypeEnum = "TRANSFER_OUT_DOMAIN"
OperationTypeEnumChangeDomainOwner OperationTypeEnum = "CHANGE_DOMAIN_OWNER"
OperationTypeEnumRenewDomain OperationTypeEnum = "RENEW_DOMAIN"
OperationTypeEnumPushDomain OperationTypeEnum = "PUSH_DOMAIN"
OperationTypeEnumInternalTransferOutDomain OperationTypeEnum = "INTERNAL_TRANSFER_OUT_DOMAIN"
OperationTypeEnumInternalTransferInDomain OperationTypeEnum = "INTERNAL_TRANSFER_IN_DOMAIN"
)


