


export enum CreateAccountFailureReasonEnum {
    AccountLimitExceeded = "ACCOUNT_LIMIT_EXCEEDED",
    EmailAlreadyExists = "EMAIL_ALREADY_EXISTS",
    InvalidAddress = "INVALID_ADDRESS",
    InvalidEmail = "INVALID_EMAIL",
    ConcurrentAccountModification = "CONCURRENT_ACCOUNT_MODIFICATION",
    InternalFailure = "INTERNAL_FAILURE",
    GovcloudAccountAlreadyExists = "GOVCLOUD_ACCOUNT_ALREADY_EXISTS",
    MissingBusinessValidation = "MISSING_BUSINESS_VALIDATION",
    FailedBusinessValidation = "FAILED_BUSINESS_VALIDATION",
    PendingBusinessValidation = "PENDING_BUSINESS_VALIDATION",
    InvalidIdentityForBusinessValidation = "INVALID_IDENTITY_FOR_BUSINESS_VALIDATION",
    UnknownBusinessValidation = "UNKNOWN_BUSINESS_VALIDATION",
    MissingPaymentInstrument = "MISSING_PAYMENT_INSTRUMENT"
}
