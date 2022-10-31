package shared

type TeamMatchupGames struct {
	AwayScore   *int64  `json:"awayScore,omitempty"`
	AwayTeam    *string `json:"awayTeam,omitempty"`
	Date        *string `json:"date,omitempty"`
	HomeScore   *int64  `json:"homeScore,omitempty"`
	HomeTeam    *string `json:"homeTeam,omitempty"`
	NeutralSite *bool   `json:"neutralSite,omitempty"`
	Season      *int64  `json:"season,omitempty"`
	SeasonType  *string `json:"season_type,omitempty"`
	Venue       *string `json:"venue,omitempty"`
	Week        *int64  `json:"week,omitempty"`
	Winner      *string `json:"winner,omitempty"`
}

type TeamMatchup struct {
	EndYear   *int64             `json:"endYear,omitempty"`
	Games     []TeamMatchupGames `json:"games,omitempty"`
	StartYear *int64             `json:"startYear,omitempty"`
	Team1     *string            `json:"team1,omitempty"`
	Team1Wins *int64             `json:"team1Wins,omitempty"`
	Team2     *string            `json:"team2,omitempty"`
	Team2Wins *int64             `json:"team2Wins,omitempty"`
	Ties      *int64             `json:"ties,omitempty"`
}
