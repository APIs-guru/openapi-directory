package shared




type ErrorCodeEnum string

const (
    ErrorCodeEnumDependencyAccessDeniedError ErrorCodeEnum = "DEPENDENCY_ACCESS_DENIED_ERROR"
ErrorCodeEnumDependencyThrottlingError ErrorCodeEnum = "DEPENDENCY_THROTTLING_ERROR"
ErrorCodeEnumDependencyServiceError ErrorCodeEnum = "DEPENDENCY_SERVICE_ERROR"
ErrorCodeEnumServiceQuotaNotAvailableError ErrorCodeEnum = "SERVICE_QUOTA_NOT_AVAILABLE_ERROR"
)


