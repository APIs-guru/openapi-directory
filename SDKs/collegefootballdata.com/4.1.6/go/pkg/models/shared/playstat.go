package shared

type PlayStatClock struct {
	Minutes *int64 `json:"minutes"`
	Seconds *int64 `json:"seconds"`
}

type PlayStat struct {
	AthleteID     *int64         `json:"athleteId"`
	AthleteName   *string        `json:"athleteName"`
	Clock         *PlayStatClock `json:"clock"`
	Conference    *string        `json:"conference"`
	Distance      *int64         `json:"distance"`
	Down          *int64         `json:"down"`
	DriveID       *int64         `json:"driveId"`
	GameID        *int64         `json:"gameId"`
	Opponent      *string        `json:"opponent"`
	OpponentScore *int64         `json:"opponentScore"`
	Period        *int64         `json:"period"`
	PlayID        *int64         `json:"playId"`
	Season        *int64         `json:"season"`
	Stat          *int64         `json:"stat"`
	StatType      *string        `json:"statType"`
	Team          *string        `json:"team"`
	TeamScore     *int64         `json:"teamScore"`
	Week          *int64         `json:"week"`
	YardsToGoal   *int64         `json:"yardsToGoal"`
}
