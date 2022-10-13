package shared

type ZoneStats struct {
	NextPage   *string          `json:"next_page"`
	Statistics []ZoneStatistics `json:"statistics"`
	Time       string           `json:"time"`
	Total      *int64           `json:"total"`
}
