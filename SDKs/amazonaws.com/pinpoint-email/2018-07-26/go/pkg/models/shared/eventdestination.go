package shared

// EventDestination
// In Amazon Pinpoint, <i>events</i> include message sends, deliveries, opens, clicks, bounces, and complaints. <i>Event destinations</i> are places that you can send information about these events to. For example, you can send event data to Amazon SNS to receive notifications when you receive bounces or complaints, or you can use Amazon Kinesis Data Firehose to stream data to Amazon S3 for long-term storage.
type EventDestination struct {
	CloudWatchDestination      *CloudWatchDestination      `json:"CloudWatchDestination,omitempty"`
	Enabled                    *bool                       `json:"Enabled,omitempty"`
	KinesisFirehoseDestination *KinesisFirehoseDestination `json:"KinesisFirehoseDestination,omitempty"`
	MatchingEventTypes         []EventTypeEnum             `json:"MatchingEventTypes"`
	Name                       string                      `json:"Name"`
	PinpointDestination        *PinpointDestination        `json:"PinpointDestination,omitempty"`
	SnsDestination             *SnsDestination             `json:"SnsDestination,omitempty"`
}
