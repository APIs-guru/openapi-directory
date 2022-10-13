package shared

type NotificationContext struct {
	Status        *ValidationStatusEnum `json:"status"`
	StatusMessage *string               `json:"statusMessage"`
	ValidationID  *string               `json:"validationId"`
}
