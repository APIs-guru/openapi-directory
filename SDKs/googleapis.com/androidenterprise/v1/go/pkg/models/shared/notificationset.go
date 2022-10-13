package shared

type NotificationSet struct {
	Notification      []Notification `json:"notification"`
	NotificationSetID *string        `json:"notificationSetId"`
}
