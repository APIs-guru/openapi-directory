export var CreateAccountFailureReasonEnum;
(function (CreateAccountFailureReasonEnum) {
    CreateAccountFailureReasonEnum["AccountLimitExceeded"] = "ACCOUNT_LIMIT_EXCEEDED";
    CreateAccountFailureReasonEnum["EmailAlreadyExists"] = "EMAIL_ALREADY_EXISTS";
    CreateAccountFailureReasonEnum["InvalidAddress"] = "INVALID_ADDRESS";
    CreateAccountFailureReasonEnum["InvalidEmail"] = "INVALID_EMAIL";
    CreateAccountFailureReasonEnum["ConcurrentAccountModification"] = "CONCURRENT_ACCOUNT_MODIFICATION";
    CreateAccountFailureReasonEnum["InternalFailure"] = "INTERNAL_FAILURE";
    CreateAccountFailureReasonEnum["GovcloudAccountAlreadyExists"] = "GOVCLOUD_ACCOUNT_ALREADY_EXISTS";
    CreateAccountFailureReasonEnum["MissingBusinessValidation"] = "MISSING_BUSINESS_VALIDATION";
    CreateAccountFailureReasonEnum["FailedBusinessValidation"] = "FAILED_BUSINESS_VALIDATION";
    CreateAccountFailureReasonEnum["PendingBusinessValidation"] = "PENDING_BUSINESS_VALIDATION";
    CreateAccountFailureReasonEnum["InvalidIdentityForBusinessValidation"] = "INVALID_IDENTITY_FOR_BUSINESS_VALIDATION";
    CreateAccountFailureReasonEnum["UnknownBusinessValidation"] = "UNKNOWN_BUSINESS_VALIDATION";
    CreateAccountFailureReasonEnum["MissingPaymentInstrument"] = "MISSING_PAYMENT_INSTRUMENT";
})(CreateAccountFailureReasonEnum || (CreateAccountFailureReasonEnum = {}));
