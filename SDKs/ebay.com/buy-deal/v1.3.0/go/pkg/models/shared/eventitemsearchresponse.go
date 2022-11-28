package shared

// EventItemSearchResponse
// The result set for the event item search.
type EventItemSearchResponse struct {
	EventItems []EventItem `json:"eventItems,omitempty"`
	Href       *string     `json:"href,omitempty"`
	Limit      *int32      `json:"limit,omitempty"`
	Next       *string     `json:"next,omitempty"`
	Offset     *int32      `json:"offset,omitempty"`
	Prev       *string     `json:"prev,omitempty"`
	Total      *int32      `json:"total,omitempty"`
}
