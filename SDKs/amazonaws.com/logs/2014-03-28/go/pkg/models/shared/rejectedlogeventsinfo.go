package shared

type RejectedLogEventsInfo struct {
	ExpiredLogEventEndIndex  *int64 `json:"expiredLogEventEndIndex"`
	TooNewLogEventStartIndex *int64 `json:"tooNewLogEventStartIndex"`
	TooOldLogEventEndIndex   *int64 `json:"tooOldLogEventEndIndex"`
}
