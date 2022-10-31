package shared



type FirehoseLogDelivery struct {
    DeliveryStream *string `json:"deliveryStream,omitempty"`
    Enabled bool `json:"enabled"`
    
}

