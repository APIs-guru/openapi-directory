package shared

type TeamRecruitingRank struct {
	Points *float64 `json:"points"`
	Rank   *int64   `json:"rank"`
	Team   *string  `json:"team"`
	Year   *int64   `json:"year"`
}
