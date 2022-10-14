package shared

type ZoneStats struct {
	NextPage   *string          `json:"next_page,omitempty"`
	Statistics []ZoneStatistics `json:"statistics,omitempty"`
	Time       string           `json:"time"`
	Total      *int64           `json:"total,omitempty"`
}
