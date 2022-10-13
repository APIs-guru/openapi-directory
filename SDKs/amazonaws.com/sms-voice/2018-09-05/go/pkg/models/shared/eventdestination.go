package shared

type EventDestination struct {
	CloudWatchLogsDestination  *CloudWatchLogsDestination  `json:"CloudWatchLogsDestination"`
	Enabled                    *bool                       `json:"Enabled"`
	KinesisFirehoseDestination *KinesisFirehoseDestination `json:"KinesisFirehoseDestination"`
	MatchingEventTypes         []EventTypeEnum             `json:"MatchingEventTypes"`
	Name                       *string                     `json:"Name"`
	SnsDestination             *SnsDestination             `json:"SnsDestination"`
}
