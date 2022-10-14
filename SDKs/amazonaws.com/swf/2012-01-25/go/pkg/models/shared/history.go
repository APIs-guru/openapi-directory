package shared

type History struct {
	Events        []HistoryEvent `json:"events"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
