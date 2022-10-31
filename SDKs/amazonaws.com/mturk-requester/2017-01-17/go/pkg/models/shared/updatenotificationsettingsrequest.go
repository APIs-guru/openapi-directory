package shared

type UpdateNotificationSettingsRequest struct {
	Active       *bool                      `json:"Active,omitempty"`
	HitTypeID    string                     `json:"HITTypeId"`
	Notification *NotificationSpecification `json:"Notification,omitempty"`
}
