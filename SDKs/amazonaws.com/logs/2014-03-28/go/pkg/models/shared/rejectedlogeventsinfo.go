package shared

// RejectedLogEventsInfo
// Represents the rejected events.
type RejectedLogEventsInfo struct {
	ExpiredLogEventEndIndex  *int64 `json:"expiredLogEventEndIndex,omitempty"`
	TooNewLogEventStartIndex *int64 `json:"tooNewLogEventStartIndex,omitempty"`
	TooOldLogEventEndIndex   *int64 `json:"tooOldLogEventEndIndex,omitempty"`
}
