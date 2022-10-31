package shared

type EventsSearchResult struct {
	Events      []Event `json:"events,omitempty"`
	ResultCount *int32  `json:"result_count,omitempty"`
}
