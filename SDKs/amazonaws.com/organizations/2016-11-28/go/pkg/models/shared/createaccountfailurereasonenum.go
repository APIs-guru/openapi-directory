package shared

type CreateAccountFailureReasonEnum string

const (
	CreateAccountFailureReasonEnumAccountLimitExceeded                 CreateAccountFailureReasonEnum = "ACCOUNT_LIMIT_EXCEEDED"
	CreateAccountFailureReasonEnumEmailAlreadyExists                   CreateAccountFailureReasonEnum = "EMAIL_ALREADY_EXISTS"
	CreateAccountFailureReasonEnumInvalidAddress                       CreateAccountFailureReasonEnum = "INVALID_ADDRESS"
	CreateAccountFailureReasonEnumInvalidEmail                         CreateAccountFailureReasonEnum = "INVALID_EMAIL"
	CreateAccountFailureReasonEnumConcurrentAccountModification        CreateAccountFailureReasonEnum = "CONCURRENT_ACCOUNT_MODIFICATION"
	CreateAccountFailureReasonEnumInternalFailure                      CreateAccountFailureReasonEnum = "INTERNAL_FAILURE"
	CreateAccountFailureReasonEnumGovcloudAccountAlreadyExists         CreateAccountFailureReasonEnum = "GOVCLOUD_ACCOUNT_ALREADY_EXISTS"
	CreateAccountFailureReasonEnumMissingBusinessValidation            CreateAccountFailureReasonEnum = "MISSING_BUSINESS_VALIDATION"
	CreateAccountFailureReasonEnumFailedBusinessValidation             CreateAccountFailureReasonEnum = "FAILED_BUSINESS_VALIDATION"
	CreateAccountFailureReasonEnumPendingBusinessValidation            CreateAccountFailureReasonEnum = "PENDING_BUSINESS_VALIDATION"
	CreateAccountFailureReasonEnumInvalidIdentityForBusinessValidation CreateAccountFailureReasonEnum = "INVALID_IDENTITY_FOR_BUSINESS_VALIDATION"
	CreateAccountFailureReasonEnumUnknownBusinessValidation            CreateAccountFailureReasonEnum = "UNKNOWN_BUSINESS_VALIDATION"
	CreateAccountFailureReasonEnumMissingPaymentInstrument             CreateAccountFailureReasonEnum = "MISSING_PAYMENT_INSTRUMENT"
)
