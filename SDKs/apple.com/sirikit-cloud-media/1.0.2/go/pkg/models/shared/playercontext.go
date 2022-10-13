package shared

type PlayerContext struct {
	ActivityIdentifier *string  `json:"activityIdentifier"`
	ContentIdentifier  *string  `json:"contentIdentifier"`
	OffsetInMillis     *int64   `json:"offsetInMillis"`
	PlaybackSpeed      *float64 `json:"playbackSpeed"`
	QueueIdentifier    *string  `json:"queueIdentifier"`
}
