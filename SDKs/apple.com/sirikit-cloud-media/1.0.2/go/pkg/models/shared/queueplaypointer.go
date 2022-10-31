package shared



type QueuePlayPointer struct {
    ContentIdentifier *string `json:"contentIdentifier,omitempty"`
    OffsetInMillis *int64 `json:"offsetInMillis,omitempty"`
    
}

