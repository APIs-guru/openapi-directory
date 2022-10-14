package shared

type FirehoseLogDeliveryDescription struct {
	DeliveryStream *string `json:"deliveryStream,omitempty"`
	Enabled        *bool   `json:"enabled,omitempty"`
}
