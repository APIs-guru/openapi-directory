package shared

type TeamGameTeamsStats struct {
	Category *string `json:"category"`
	Stat     *string `json:"stat"`
}

type TeamGameTeams struct {
	Conference *string              `json:"conference"`
	HomeAway   *bool                `json:"homeAway"`
	Points     *int64               `json:"points"`
	School     *string              `json:"school"`
	Stats      []TeamGameTeamsStats `json:"stats"`
}

type TeamGame struct {
	ID    *int64          `json:"id"`
	Teams []TeamGameTeams `json:"teams"`
}
