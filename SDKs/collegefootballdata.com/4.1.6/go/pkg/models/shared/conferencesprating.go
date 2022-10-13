package shared

type ConferenceSpRatingDefenseHavoc struct {
	Db         *float64 `json:"db"`
	FrontSeven *float64 `json:"frontSeven"`
	Total      *float64 `json:"total"`
}

type ConferenceSpRatingDefense struct {
	Explosiveness *float64                        `json:"explosiveness"`
	Havoc         *ConferenceSpRatingDefenseHavoc `json:"havoc"`
	Pasing        *float64                        `json:"pasing"`
	PassingDowns  *float64                        `json:"passingDowns"`
	Rating        *float64                        `json:"rating"`
	Rushing       *float64                        `json:"rushing"`
	StandardDowns *float64                        `json:"standardDowns"`
	Success       *float64                        `json:"success"`
}

type ConferenceSpRatingOffense struct {
	Explosiveness *float64 `json:"explosiveness"`
	Pace          *float64 `json:"pace"`
	Passing       *float64 `json:"passing"`
	PassingDowns  *float64 `json:"passingDowns"`
	Rating        *float64 `json:"rating"`
	RunRate       *float64 `json:"runRate"`
	Rushing       *float64 `json:"rushing"`
	StandardDowns *float64 `json:"standardDowns"`
	Success       *float64 `json:"success"`
}

type ConferenceSpRatingSpecialTeams struct {
	Rating *float64 `json:"rating"`
}

type ConferenceSpRating struct {
	Conference      *string                         `json:"conference"`
	Defense         *ConferenceSpRatingDefense      `json:"defense"`
	Offense         *ConferenceSpRatingOffense      `json:"offense"`
	Rating          *float64                        `json:"rating"`
	SecondOrderWins *float64                        `json:"secondOrderWins"`
	Sos             *float64                        `json:"sos"`
	SpecialTeams    *ConferenceSpRatingSpecialTeams `json:"specialTeams"`
	Year            *int64                          `json:"year"`
}
