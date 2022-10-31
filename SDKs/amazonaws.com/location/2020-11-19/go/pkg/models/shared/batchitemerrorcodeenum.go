package shared

type BatchItemErrorCodeEnum string

const (
	BatchItemErrorCodeEnumAccessDeniedError     BatchItemErrorCodeEnum = "AccessDeniedError"
	BatchItemErrorCodeEnumConflictError         BatchItemErrorCodeEnum = "ConflictError"
	BatchItemErrorCodeEnumInternalServerError   BatchItemErrorCodeEnum = "InternalServerError"
	BatchItemErrorCodeEnumResourceNotFoundError BatchItemErrorCodeEnum = "ResourceNotFoundError"
	BatchItemErrorCodeEnumThrottlingError       BatchItemErrorCodeEnum = "ThrottlingError"
	BatchItemErrorCodeEnumValidationError       BatchItemErrorCodeEnum = "ValidationError"
)
