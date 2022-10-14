package shared

type EventDestination struct {
	CloudWatchDestination      *CloudWatchDestination      `json:"CloudWatchDestination,omitempty"`
	Enabled                    *bool                       `json:"Enabled,omitempty"`
	KinesisFirehoseDestination *KinesisFirehoseDestination `json:"KinesisFirehoseDestination,omitempty"`
	MatchingEventTypes         []EventTypeEnum             `json:"MatchingEventTypes"`
	Name                       string                      `json:"Name"`
	PinpointDestination        *PinpointDestination        `json:"PinpointDestination,omitempty"`
	SnsDestination             *SnsDestination             `json:"SnsDestination,omitempty"`
}
