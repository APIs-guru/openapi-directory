package shared



type ConferenceSpRatingDefenseHavoc struct {
    Db *float64 `json:"db,omitempty"`
    FrontSeven *float64 `json:"frontSeven,omitempty"`
    Total *float64 `json:"total,omitempty"`
    
}

type ConferenceSpRatingDefense struct {
    Explosiveness *float64 `json:"explosiveness,omitempty"`
    Havoc *ConferenceSpRatingDefenseHavoc `json:"havoc,omitempty"`
    Pasing *float64 `json:"pasing,omitempty"`
    PassingDowns *float64 `json:"passingDowns,omitempty"`
    Rating *float64 `json:"rating,omitempty"`
    Rushing *float64 `json:"rushing,omitempty"`
    StandardDowns *float64 `json:"standardDowns,omitempty"`
    Success *float64 `json:"success,omitempty"`
    
}

type ConferenceSpRatingOffense struct {
    Explosiveness *float64 `json:"explosiveness,omitempty"`
    Pace *float64 `json:"pace,omitempty"`
    Passing *float64 `json:"passing,omitempty"`
    PassingDowns *float64 `json:"passingDowns,omitempty"`
    Rating *float64 `json:"rating,omitempty"`
    RunRate *float64 `json:"runRate,omitempty"`
    Rushing *float64 `json:"rushing,omitempty"`
    StandardDowns *float64 `json:"standardDowns,omitempty"`
    Success *float64 `json:"success,omitempty"`
    
}

type ConferenceSpRatingSpecialTeams struct {
    Rating *float64 `json:"rating,omitempty"`
    
}

type ConferenceSpRating struct {
    Conference *string `json:"conference,omitempty"`
    Defense *ConferenceSpRatingDefense `json:"defense,omitempty"`
    Offense *ConferenceSpRatingOffense `json:"offense,omitempty"`
    Rating *float64 `json:"rating,omitempty"`
    SecondOrderWins *float64 `json:"secondOrderWins,omitempty"`
    Sos *float64 `json:"sos,omitempty"`
    SpecialTeams *ConferenceSpRatingSpecialTeams `json:"specialTeams,omitempty"`
    Year *int64 `json:"year,omitempty"`
    
}

