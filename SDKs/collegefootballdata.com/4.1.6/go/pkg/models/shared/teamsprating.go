package shared

type TeamSpRatingDefenseHavoc struct {
	Db         *float64 `json:"db,omitempty"`
	FrontSeven *float64 `json:"frontSeven,omitempty"`
	Total      *float64 `json:"total,omitempty"`
}

type TeamSpRatingDefense struct {
	Explosiveness *float64                  `json:"explosiveness,omitempty"`
	Havoc         *TeamSpRatingDefenseHavoc `json:"havoc,omitempty"`
	Pasing        *float64                  `json:"pasing,omitempty"`
	PassingDowns  *float64                  `json:"passingDowns,omitempty"`
	Ranking       *float64                  `json:"ranking,omitempty"`
	Rating        *float64                  `json:"rating,omitempty"`
	Rushing       *float64                  `json:"rushing,omitempty"`
	StandardDowns *float64                  `json:"standardDowns,omitempty"`
	Success       *float64                  `json:"success,omitempty"`
}

type TeamSpRatingOffense struct {
	Explosiveness *float64 `json:"explosiveness,omitempty"`
	Pace          *float64 `json:"pace,omitempty"`
	Passing       *float64 `json:"passing,omitempty"`
	PassingDowns  *float64 `json:"passingDowns,omitempty"`
	Ranking       *float64 `json:"ranking,omitempty"`
	Rating        *float64 `json:"rating,omitempty"`
	RunRate       *float64 `json:"runRate,omitempty"`
	Rushing       *float64 `json:"rushing,omitempty"`
	StandardDowns *float64 `json:"standardDowns,omitempty"`
	Success       *float64 `json:"success,omitempty"`
}

type TeamSpRatingSpecialTeams struct {
	Rating *float64 `json:"rating,omitempty"`
}

type TeamSpRating struct {
	Conference      *string                   `json:"conference,omitempty"`
	Defense         *TeamSpRatingDefense      `json:"defense,omitempty"`
	Offense         *TeamSpRatingOffense      `json:"offense,omitempty"`
	Ranking         *float64                  `json:"ranking,omitempty"`
	Rating          *float64                  `json:"rating,omitempty"`
	SecondOrderWins *float64                  `json:"secondOrderWins,omitempty"`
	Sos             *float64                  `json:"sos,omitempty"`
	SpecialTeams    *TeamSpRatingSpecialTeams `json:"specialTeams,omitempty"`
	Team            *string                   `json:"team,omitempty"`
	Year            *int64                    `json:"year,omitempty"`
}
