package shared

type CoachSeasons struct {
	Games          *int64   `json:"games,omitempty"`
	Losses         *int64   `json:"losses,omitempty"`
	PostseasonRank *int64   `json:"postseason_rank,omitempty"`
	PreseasonRank  *int64   `json:"preseason_rank,omitempty"`
	School         *string  `json:"school,omitempty"`
	SpDefense      *float64 `json:"sp_defense,omitempty"`
	SpOffense      *float64 `json:"sp_offense,omitempty"`
	SpOverall      *float64 `json:"sp_overall,omitempty"`
	Srs            *float64 `json:"srs,omitempty"`
	Ties           *int64   `json:"ties,omitempty"`
	Wins           *int64   `json:"wins,omitempty"`
	Year           *string  `json:"year,omitempty"`
}

type Coach struct {
	FirstName *string        `json:"first_name,omitempty"`
	LastName  *string        `json:"last_name,omitempty"`
	Seasons   []CoachSeasons `json:"seasons,omitempty"`
}
