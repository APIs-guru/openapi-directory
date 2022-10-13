package shared

type UpdateNotificationSettingsRequest struct {
	Active       *bool                      `json:"Active"`
	HitTypeID    string                     `json:"HITTypeId"`
	Notification *NotificationSpecification `json:"Notification"`
}
