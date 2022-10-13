package shared

type RawStatisticsListSessionsResponse struct {
	Data       []VideoSession `json:"data"`
	Pagination *Pagination    `json:"pagination"`
}
