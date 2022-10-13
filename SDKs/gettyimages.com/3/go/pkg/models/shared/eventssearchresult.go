package shared

type EventsSearchResult struct {
	Events      []Event `json:"events"`
	ResultCount *int32  `json:"result_count"`
}
