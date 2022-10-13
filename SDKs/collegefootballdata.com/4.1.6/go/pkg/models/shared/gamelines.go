package shared

type GameLinesLines struct {
	AwayMoneyline   *float64 `json:"awayMoneyline"`
	FormattedSpread *string  `json:"formattedSpread"`
	HomeMoneyline   *float64 `json:"homeMoneyline"`
	OverUnder       *float64 `json:"overUnder"`
	OverUnderOpen   *float64 `json:"overUnderOpen"`
	Provider        *string  `json:"provider"`
	Spread          *float64 `json:"spread"`
	SpreadOpen      *float64 `json:"spreadOpen"`
}

type GameLines struct {
	AwayConference *string          `json:"awayConference"`
	AwayScore      *int64           `json:"awayScore"`
	AwayTeam       *string          `json:"awayTeam"`
	HomeConference *string          `json:"homeConference"`
	HomeScore      *int64           `json:"homeScore"`
	HomeTeam       *string          `json:"homeTeam"`
	ID             *int64           `json:"id"`
	Lines          []GameLinesLines `json:"lines"`
	Season         *int64           `json:"season"`
	SeasonType     *string          `json:"seasonType"`
	Week           *int64           `json:"week"`
}
