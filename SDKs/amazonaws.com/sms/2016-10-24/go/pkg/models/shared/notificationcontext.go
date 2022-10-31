package shared

type NotificationContext struct {
	Status        *ValidationStatusEnum `json:"status,omitempty"`
	StatusMessage *string               `json:"statusMessage,omitempty"`
	ValidationID  *string               `json:"validationId,omitempty"`
}
