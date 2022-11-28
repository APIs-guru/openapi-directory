package shared

// EventStream
// Specifies settings for publishing event data to an Amazon Kinesis data stream or an Amazon Kinesis Data Firehose delivery stream.
type EventStream struct {
	ApplicationID        string  `json:"ApplicationId"`
	DestinationStreamArn string  `json:"DestinationStreamArn"`
	ExternalID           *string `json:"ExternalId,omitempty"`
	LastModifiedDate     *string `json:"LastModifiedDate,omitempty"`
	LastUpdatedBy        *string `json:"LastUpdatedBy,omitempty"`
	RoleArn              string  `json:"RoleArn"`
}
