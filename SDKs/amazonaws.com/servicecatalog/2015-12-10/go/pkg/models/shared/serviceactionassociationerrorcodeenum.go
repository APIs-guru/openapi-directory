package shared

type ServiceActionAssociationErrorCodeEnum string

const (
	ServiceActionAssociationErrorCodeEnumDuplicateResource ServiceActionAssociationErrorCodeEnum = "DUPLICATE_RESOURCE"
	ServiceActionAssociationErrorCodeEnumInternalFailure   ServiceActionAssociationErrorCodeEnum = "INTERNAL_FAILURE"
	ServiceActionAssociationErrorCodeEnumLimitExceeded     ServiceActionAssociationErrorCodeEnum = "LIMIT_EXCEEDED"
	ServiceActionAssociationErrorCodeEnumResourceNotFound  ServiceActionAssociationErrorCodeEnum = "RESOURCE_NOT_FOUND"
	ServiceActionAssociationErrorCodeEnumThrottling        ServiceActionAssociationErrorCodeEnum = "THROTTLING"
)
