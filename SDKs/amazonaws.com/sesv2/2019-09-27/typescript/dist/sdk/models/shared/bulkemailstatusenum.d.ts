export declare enum BulkEmailStatusEnum {
    Success = "SUCCESS",
    MessageRejected = "MESSAGE_REJECTED",
    MailFromDomainNotVerified = "MAIL_FROM_DOMAIN_NOT_VERIFIED",
    ConfigurationSetNotFound = "CONFIGURATION_SET_NOT_FOUND",
    TemplateNotFound = "TEMPLATE_NOT_FOUND",
    AccountSuspended = "ACCOUNT_SUSPENDED",
    AccountThrottled = "ACCOUNT_THROTTLED",
    AccountDailyQuotaExceeded = "ACCOUNT_DAILY_QUOTA_EXCEEDED",
    InvalidSendingPoolName = "INVALID_SENDING_POOL_NAME",
    AccountSendingPaused = "ACCOUNT_SENDING_PAUSED",
    ConfigurationSetSendingPaused = "CONFIGURATION_SET_SENDING_PAUSED",
    InvalidParameter = "INVALID_PARAMETER",
    TransientFailure = "TRANSIENT_FAILURE",
    Failed = "FAILED"
}
