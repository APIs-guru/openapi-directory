package shared

type PregameWp struct {
	AwayTeam    *string  `json:"awayTeam"`
	GameID      *int64   `json:"gameId"`
	HomeTeam    *string  `json:"homeTeam"`
	HomeWinProb *float64 `json:"homeWinProb"`
	Season      *int64   `json:"season"`
	SeasonType  *string  `json:"seasonType"`
	Spread      *float64 `json:"spread"`
	Week        *int64   `json:"week"`
}
