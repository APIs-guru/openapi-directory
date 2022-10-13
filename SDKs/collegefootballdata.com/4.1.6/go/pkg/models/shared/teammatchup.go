package shared

type TeamMatchupGames struct {
	AwayScore   *int64  `json:"awayScore"`
	AwayTeam    *string `json:"awayTeam"`
	Date        *string `json:"date"`
	HomeScore   *int64  `json:"homeScore"`
	HomeTeam    *string `json:"homeTeam"`
	NeutralSite *bool   `json:"neutralSite"`
	Season      *int64  `json:"season"`
	SeasonType  *string `json:"season_type"`
	Venue       *string `json:"venue"`
	Week        *int64  `json:"week"`
	Winner      *string `json:"winner"`
}

type TeamMatchup struct {
	EndYear   *int64             `json:"endYear"`
	Games     []TeamMatchupGames `json:"games"`
	StartYear *int64             `json:"startYear"`
	Team1     *string            `json:"team1"`
	Team1Wins *int64             `json:"team1Wins"`
	Team2     *string            `json:"team2"`
	Team2Wins *int64             `json:"team2Wins"`
	Ties      *int64             `json:"ties"`
}
