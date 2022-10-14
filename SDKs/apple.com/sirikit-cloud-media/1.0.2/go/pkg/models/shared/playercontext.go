package shared

type PlayerContext struct {
	ActivityIdentifier *string  `json:"activityIdentifier,omitempty"`
	ContentIdentifier  *string  `json:"contentIdentifier,omitempty"`
	OffsetInMillis     *int64   `json:"offsetInMillis,omitempty"`
	PlaybackSpeed      *float64 `json:"playbackSpeed,omitempty"`
	QueueIdentifier    *string  `json:"queueIdentifier,omitempty"`
}
