package shared

type DraftPickHometownInfo struct {
	City        *string  `json:"city"`
	Country     *string  `json:"country"`
	CountryFips *int64   `json:"countryFips"`
	Latitude    *float64 `json:"latitude"`
	Longitude   *float64 `json:"longitude"`
	State       *string  `json:"state"`
}

type DraftPick struct {
	CollegeAthleteID        *int64                 `json:"collegeAthleteId"`
	CollegeConference       *string                `json:"collegeConference"`
	CollegeID               *int64                 `json:"collegeId"`
	CollegeTeam             *string                `json:"collegeTeam"`
	Height                  *int64                 `json:"height"`
	HometownInfo            *DraftPickHometownInfo `json:"hometownInfo"`
	Name                    *string                `json:"name"`
	NflAthleteID            *int64                 `json:"nflAthleteId"`
	NflTeam                 *string                `json:"nflTeam"`
	Overall                 *int64                 `json:"overall"`
	Pick                    *int64                 `json:"pick"`
	Position                *string                `json:"position"`
	PreDraftGrade           *int64                 `json:"preDraftGrade"`
	PreDraftPositionRanking *int64                 `json:"preDraftPositionRanking"`
	PreDraftRanking         *int64                 `json:"preDraftRanking"`
	Round                   *int64                 `json:"round"`
	Weight                  *int64                 `json:"weight"`
	Year                    *int64                 `json:"year"`
}
