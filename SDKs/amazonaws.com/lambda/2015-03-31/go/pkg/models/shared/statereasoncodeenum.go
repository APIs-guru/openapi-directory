package shared




type StateReasonCodeEnum string

const (
    StateReasonCodeEnumIdle StateReasonCodeEnum = "Idle"
StateReasonCodeEnumCreating StateReasonCodeEnum = "Creating"
StateReasonCodeEnumRestoring StateReasonCodeEnum = "Restoring"
StateReasonCodeEnumEniLimitExceeded StateReasonCodeEnum = "EniLimitExceeded"
StateReasonCodeEnumInsufficientRolePermissions StateReasonCodeEnum = "InsufficientRolePermissions"
StateReasonCodeEnumInvalidConfiguration StateReasonCodeEnum = "InvalidConfiguration"
StateReasonCodeEnumInternalError StateReasonCodeEnum = "InternalError"
StateReasonCodeEnumSubnetOutOfIPAddresses StateReasonCodeEnum = "SubnetOutOfIPAddresses"
StateReasonCodeEnumInvalidSubnet StateReasonCodeEnum = "InvalidSubnet"
StateReasonCodeEnumInvalidSecurityGroup StateReasonCodeEnum = "InvalidSecurityGroup"
StateReasonCodeEnumImageDeleted StateReasonCodeEnum = "ImageDeleted"
StateReasonCodeEnumImageAccessDenied StateReasonCodeEnum = "ImageAccessDenied"
StateReasonCodeEnumInvalidImage StateReasonCodeEnum = "InvalidImage"
)


