package shared

// NotificationSet
// A resource returned by the PullNotificationSet API, which contains a collection of notifications for enterprises associated with the service account authenticated for the request.
type NotificationSet struct {
	Notification      []Notification `json:"notification,omitempty"`
	NotificationSetID *string        `json:"notificationSetId,omitempty"`
}
