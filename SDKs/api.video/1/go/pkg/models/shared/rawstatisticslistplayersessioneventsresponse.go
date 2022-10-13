package shared

type RawStatisticsListPlayerSessionEventsResponse struct {
	Data       []PlayerSessionEvent `json:"data"`
	Pagination *Pagination          `json:"pagination"`
}
