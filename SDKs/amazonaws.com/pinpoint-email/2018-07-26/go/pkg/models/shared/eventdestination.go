package shared

type EventDestination struct {
	CloudWatchDestination      *CloudWatchDestination      `json:"CloudWatchDestination"`
	Enabled                    *bool                       `json:"Enabled"`
	KinesisFirehoseDestination *KinesisFirehoseDestination `json:"KinesisFirehoseDestination"`
	MatchingEventTypes         []EventTypeEnum             `json:"MatchingEventTypes"`
	Name                       string                      `json:"Name"`
	PinpointDestination        *PinpointDestination        `json:"PinpointDestination"`
	SnsDestination             *SnsDestination             `json:"SnsDestination"`
}
