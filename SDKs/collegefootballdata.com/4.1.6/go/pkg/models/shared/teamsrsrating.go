package shared

type TeamSrsRating struct {
	Conference *string  `json:"conference"`
	Division   *string  `json:"division"`
	Ranking    *float64 `json:"ranking"`
	Rating     *float64 `json:"rating"`
	Team       *string  `json:"team"`
	Year       *int64   `json:"year"`
}
