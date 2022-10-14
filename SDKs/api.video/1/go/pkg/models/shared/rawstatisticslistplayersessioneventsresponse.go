package shared

type RawStatisticsListPlayerSessionEventsResponse struct {
	Data       []PlayerSessionEvent `json:"data,omitempty"`
	Pagination *Pagination          `json:"pagination,omitempty"`
}
