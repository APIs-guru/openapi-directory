package shared

type CoachSeasons struct {
	Games          *int64   `json:"games"`
	Losses         *int64   `json:"losses"`
	PostseasonRank *int64   `json:"postseason_rank"`
	PreseasonRank  *int64   `json:"preseason_rank"`
	School         *string  `json:"school"`
	SpDefense      *float64 `json:"sp_defense"`
	SpOffense      *float64 `json:"sp_offense"`
	SpOverall      *float64 `json:"sp_overall"`
	Srs            *float64 `json:"srs"`
	Ties           *int64   `json:"ties"`
	Wins           *int64   `json:"wins"`
	Year           *string  `json:"year"`
}

type Coach struct {
	FirstName *string        `json:"first_name"`
	LastName  *string        `json:"last_name"`
	Seasons   []CoachSeasons `json:"seasons"`
}
