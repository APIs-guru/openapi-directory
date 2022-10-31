package shared

type SendTestEventNotificationRequest struct {
	Notification  NotificationSpecification `json:"Notification"`
	TestEventType EventTypeEnum             `json:"TestEventType"`
}
