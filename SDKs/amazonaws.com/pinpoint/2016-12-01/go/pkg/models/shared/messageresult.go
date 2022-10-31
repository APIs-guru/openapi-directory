package shared

type MessageResult struct {
	DeliveryStatus DeliveryStatusEnum `json:"DeliveryStatus"`
	MessageID      *string            `json:"MessageId,omitempty"`
	StatusCode     int64              `json:"StatusCode"`
	StatusMessage  *string            `json:"StatusMessage,omitempty"`
	UpdatedToken   *string            `json:"UpdatedToken,omitempty"`
}
