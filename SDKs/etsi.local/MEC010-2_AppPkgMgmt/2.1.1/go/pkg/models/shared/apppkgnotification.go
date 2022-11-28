package shared

type AppPkgNotificationOperationalStateEnum string

const (
	AppPkgNotificationOperationalStateEnumDisabled AppPkgNotificationOperationalStateEnum = "DISABLED"
	AppPkgNotificationOperationalStateEnumEnabled  AppPkgNotificationOperationalStateEnum = "ENABLED"
)

// AppPkgNotification
// 'This data type represents an application package management notification for informing the subscribers about onboarding application package resources. The notification is triggered when a new application package is onboarded'
type AppPkgNotification struct {
	Links            AppPkgNotificationLinks                `json:"_links"`
	AppDID           string                                 `json:"appDId"`
	AppPkgID         string                                 `json:"appPkgId"`
	ID               string                                 `json:"id"`
	NotificationType AppPkgNotificationTypeEnum             `json:"notificationType"`
	OperationalState AppPkgNotificationOperationalStateEnum `json:"operationalState"`
	SubscriptionID   string                                 `json:"subscriptionId"`
	TimeStamp        TimeStamp                              `json:"timeStamp"`
}
