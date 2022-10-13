package shared

type QueuePlayPointer struct {
	ContentIdentifier *string `json:"contentIdentifier"`
	OffsetInMillis    *int64  `json:"offsetInMillis"`
}
