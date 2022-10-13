package shared

type TeamSpRatingDefenseHavoc struct {
	Db         *float64 `json:"db"`
	FrontSeven *float64 `json:"frontSeven"`
	Total      *float64 `json:"total"`
}

type TeamSpRatingDefense struct {
	Explosiveness *float64                  `json:"explosiveness"`
	Havoc         *TeamSpRatingDefenseHavoc `json:"havoc"`
	Pasing        *float64                  `json:"pasing"`
	PassingDowns  *float64                  `json:"passingDowns"`
	Ranking       *float64                  `json:"ranking"`
	Rating        *float64                  `json:"rating"`
	Rushing       *float64                  `json:"rushing"`
	StandardDowns *float64                  `json:"standardDowns"`
	Success       *float64                  `json:"success"`
}

type TeamSpRatingOffense struct {
	Explosiveness *float64 `json:"explosiveness"`
	Pace          *float64 `json:"pace"`
	Passing       *float64 `json:"passing"`
	PassingDowns  *float64 `json:"passingDowns"`
	Ranking       *float64 `json:"ranking"`
	Rating        *float64 `json:"rating"`
	RunRate       *float64 `json:"runRate"`
	Rushing       *float64 `json:"rushing"`
	StandardDowns *float64 `json:"standardDowns"`
	Success       *float64 `json:"success"`
}

type TeamSpRatingSpecialTeams struct {
	Rating *float64 `json:"rating"`
}

type TeamSpRating struct {
	Conference      *string                   `json:"conference"`
	Defense         *TeamSpRatingDefense      `json:"defense"`
	Offense         *TeamSpRatingOffense      `json:"offense"`
	Ranking         *float64                  `json:"ranking"`
	Rating          *float64                  `json:"rating"`
	SecondOrderWins *float64                  `json:"secondOrderWins"`
	Sos             *float64                  `json:"sos"`
	SpecialTeams    *TeamSpRatingSpecialTeams `json:"specialTeams"`
	Team            *string                   `json:"team"`
	Year            *int64                    `json:"year"`
}
