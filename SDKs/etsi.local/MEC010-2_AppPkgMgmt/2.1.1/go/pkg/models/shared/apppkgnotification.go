package shared




type AppPkgNotificationOperationalStateEnum string

const (
    AppPkgNotificationOperationalStateEnumDisabled AppPkgNotificationOperationalStateEnum = "DISABLED"
AppPkgNotificationOperationalStateEnumEnabled AppPkgNotificationOperationalStateEnum = "ENABLED"
)


type AppPkgNotification struct {
    Links AppPkgNotificationLinks `json:"_links"`
    AppDID string `json:"appDId"`
    AppPkgID string `json:"appPkgId"`
    ID string `json:"id"`
    NotificationType AppPkgNotificationTypeEnum `json:"notificationType"`
    OperationalState AppPkgNotificationOperationalStateEnum `json:"operationalState"`
    SubscriptionID string `json:"subscriptionId"`
    TimeStamp TimeStamp `json:"timeStamp"`
    
}

