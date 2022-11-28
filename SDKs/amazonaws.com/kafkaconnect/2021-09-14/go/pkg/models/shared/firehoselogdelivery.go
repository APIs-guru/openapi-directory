package shared

// FirehoseLogDelivery
// The settings for delivering logs to Amazon Kinesis Data Firehose.
type FirehoseLogDelivery struct {
	DeliveryStream *string `json:"deliveryStream,omitempty"`
	Enabled        bool    `json:"enabled"`
}
