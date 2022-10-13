package shared

type MessageResult struct {
	DeliveryStatus DeliveryStatusEnum `json:"DeliveryStatus"`
	MessageID      *string            `json:"MessageId"`
	StatusCode     int64              `json:"StatusCode"`
	StatusMessage  *string            `json:"StatusMessage"`
	UpdatedToken   *string            `json:"UpdatedToken"`
}
