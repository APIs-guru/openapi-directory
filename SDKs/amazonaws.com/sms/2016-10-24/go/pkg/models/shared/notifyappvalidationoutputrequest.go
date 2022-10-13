package shared

type NotifyAppValidationOutputRequest struct {
	AppID               string               `json:"appId"`
	NotificationContext *NotificationContext `json:"notificationContext"`
}
