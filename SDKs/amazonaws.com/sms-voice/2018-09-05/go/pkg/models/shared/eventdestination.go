package shared

// EventDestination
// An object that defines an event destination.
type EventDestination struct {
	CloudWatchLogsDestination  *CloudWatchLogsDestination  `json:"CloudWatchLogsDestination,omitempty"`
	Enabled                    *bool                       `json:"Enabled,omitempty"`
	KinesisFirehoseDestination *KinesisFirehoseDestination `json:"KinesisFirehoseDestination,omitempty"`
	MatchingEventTypes         []EventTypeEnum             `json:"MatchingEventTypes,omitempty"`
	Name                       *string                     `json:"Name,omitempty"`
	SnsDestination             *SnsDestination             `json:"SnsDestination,omitempty"`
}
