package shared

type TeamSrsRating struct {
	Conference *string  `json:"conference,omitempty"`
	Division   *string  `json:"division,omitempty"`
	Ranking    *float64 `json:"ranking,omitempty"`
	Rating     *float64 `json:"rating,omitempty"`
	Team       *string  `json:"team,omitempty"`
	Year       *int64   `json:"year,omitempty"`
}
