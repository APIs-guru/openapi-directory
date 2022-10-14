package shared

type DraftPickHometownInfo struct {
	City        *string  `json:"city,omitempty"`
	Country     *string  `json:"country,omitempty"`
	CountryFips *int64   `json:"countryFips,omitempty"`
	Latitude    *float64 `json:"latitude,omitempty"`
	Longitude   *float64 `json:"longitude,omitempty"`
	State       *string  `json:"state,omitempty"`
}

type DraftPick struct {
	CollegeAthleteID        *int64                 `json:"collegeAthleteId,omitempty"`
	CollegeConference       *string                `json:"collegeConference,omitempty"`
	CollegeID               *int64                 `json:"collegeId,omitempty"`
	CollegeTeam             *string                `json:"collegeTeam,omitempty"`
	Height                  *int64                 `json:"height,omitempty"`
	HometownInfo            *DraftPickHometownInfo `json:"hometownInfo,omitempty"`
	Name                    *string                `json:"name,omitempty"`
	NflAthleteID            *int64                 `json:"nflAthleteId,omitempty"`
	NflTeam                 *string                `json:"nflTeam,omitempty"`
	Overall                 *int64                 `json:"overall,omitempty"`
	Pick                    *int64                 `json:"pick,omitempty"`
	Position                *string                `json:"position,omitempty"`
	PreDraftGrade           *int64                 `json:"preDraftGrade,omitempty"`
	PreDraftPositionRanking *int64                 `json:"preDraftPositionRanking,omitempty"`
	PreDraftRanking         *int64                 `json:"preDraftRanking,omitempty"`
	Round                   *int64                 `json:"round,omitempty"`
	Weight                  *int64                 `json:"weight,omitempty"`
	Year                    *int64                 `json:"year,omitempty"`
}
