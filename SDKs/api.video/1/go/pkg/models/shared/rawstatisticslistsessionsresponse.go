package shared

type RawStatisticsListSessionsResponse struct {
	Data       []VideoSession `json:"data,omitempty"`
	Pagination *Pagination    `json:"pagination,omitempty"`
}
