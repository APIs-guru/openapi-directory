package shared

type FirehoseLogDeliveryDescription struct {
	DeliveryStream *string `json:"deliveryStream"`
	Enabled        *bool   `json:"enabled"`
}
