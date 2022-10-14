package shared

type PlayStatClock struct {
	Minutes *int64 `json:"minutes,omitempty"`
	Seconds *int64 `json:"seconds,omitempty"`
}

type PlayStat struct {
	AthleteID     *int64         `json:"athleteId,omitempty"`
	AthleteName   *string        `json:"athleteName,omitempty"`
	Clock         *PlayStatClock `json:"clock,omitempty"`
	Conference    *string        `json:"conference,omitempty"`
	Distance      *int64         `json:"distance,omitempty"`
	Down          *int64         `json:"down,omitempty"`
	DriveID       *int64         `json:"driveId,omitempty"`
	GameID        *int64         `json:"gameId,omitempty"`
	Opponent      *string        `json:"opponent,omitempty"`
	OpponentScore *int64         `json:"opponentScore,omitempty"`
	Period        *int64         `json:"period,omitempty"`
	PlayID        *int64         `json:"playId,omitempty"`
	Season        *int64         `json:"season,omitempty"`
	Stat          *int64         `json:"stat,omitempty"`
	StatType      *string        `json:"statType,omitempty"`
	Team          *string        `json:"team,omitempty"`
	TeamScore     *int64         `json:"teamScore,omitempty"`
	Week          *int64         `json:"week,omitempty"`
	YardsToGoal   *int64         `json:"yardsToGoal,omitempty"`
}
