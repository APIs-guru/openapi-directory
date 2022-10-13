package shared

type FirehoseLogDelivery struct {
	DeliveryStream *string `json:"deliveryStream"`
	Enabled        bool    `json:"enabled"`
}
