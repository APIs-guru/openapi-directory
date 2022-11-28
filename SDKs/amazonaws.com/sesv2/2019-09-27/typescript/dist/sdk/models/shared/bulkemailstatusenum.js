export var BulkEmailStatusEnum;
(function (BulkEmailStatusEnum) {
    BulkEmailStatusEnum["Success"] = "SUCCESS";
    BulkEmailStatusEnum["MessageRejected"] = "MESSAGE_REJECTED";
    BulkEmailStatusEnum["MailFromDomainNotVerified"] = "MAIL_FROM_DOMAIN_NOT_VERIFIED";
    BulkEmailStatusEnum["ConfigurationSetNotFound"] = "CONFIGURATION_SET_NOT_FOUND";
    BulkEmailStatusEnum["TemplateNotFound"] = "TEMPLATE_NOT_FOUND";
    BulkEmailStatusEnum["AccountSuspended"] = "ACCOUNT_SUSPENDED";
    BulkEmailStatusEnum["AccountThrottled"] = "ACCOUNT_THROTTLED";
    BulkEmailStatusEnum["AccountDailyQuotaExceeded"] = "ACCOUNT_DAILY_QUOTA_EXCEEDED";
    BulkEmailStatusEnum["InvalidSendingPoolName"] = "INVALID_SENDING_POOL_NAME";
    BulkEmailStatusEnum["AccountSendingPaused"] = "ACCOUNT_SENDING_PAUSED";
    BulkEmailStatusEnum["ConfigurationSetSendingPaused"] = "CONFIGURATION_SET_SENDING_PAUSED";
    BulkEmailStatusEnum["InvalidParameter"] = "INVALID_PARAMETER";
    BulkEmailStatusEnum["TransientFailure"] = "TRANSIENT_FAILURE";
    BulkEmailStatusEnum["Failed"] = "FAILED";
})(BulkEmailStatusEnum || (BulkEmailStatusEnum = {}));
