package shared

// FirehoseLogDeliveryDescription
// A description of the settings for delivering logs to Amazon Kinesis Data Firehose.
type FirehoseLogDeliveryDescription struct {
	DeliveryStream *string `json:"deliveryStream,omitempty"`
	Enabled        *bool   `json:"enabled,omitempty"`
}
