package shared

type EndpointMessageResult struct {
	Address        *string            `json:"Address"`
	DeliveryStatus DeliveryStatusEnum `json:"DeliveryStatus"`
	MessageID      *string            `json:"MessageId"`
	StatusCode     int64              `json:"StatusCode"`
	StatusMessage  *string            `json:"StatusMessage"`
	UpdatedToken   *string            `json:"UpdatedToken"`
}
