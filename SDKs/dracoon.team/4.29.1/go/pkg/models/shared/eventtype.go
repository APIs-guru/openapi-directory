package shared

type EventType struct {
	ID                         int32  `json:"id"`
	Name                       string `json:"name"`
	UsableCustomerAdminWebhook bool   `json:"usableCustomerAdminWebhook"`
	UsableNodeWebhook          bool   `json:"usableNodeWebhook"`
	UsablePushNotification     bool   `json:"usablePushNotification"`
	UsableTenantWebhook        bool   `json:"usableTenantWebhook"`
}
