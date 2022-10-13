package shared

type PlayWp struct {
	Away          *string  `json:"away"`
	AwayID        *int64   `json:"awayId"`
	AwayScore     *int64   `json:"awayScore"`
	Distance      *int64   `json:"distance"`
	Down          *int64   `json:"down"`
	GamesID       *int64   `json:"gamesId"`
	Home          *string  `json:"home"`
	HomeBall      *bool    `json:"homeBall"`
	HomeID        *int64   `json:"homeId"`
	HomeScore     *int64   `json:"homeScore"`
	HomeWinProb   *float64 `json:"homeWinProb"`
	PlayID        *int64   `json:"playId"`
	PlayNumber    *int64   `json:"playNumber"`
	PlayText      *string  `json:"playText"`
	Spread        *float64 `json:"spread"`
	TimeRemaining *int64   `json:"timeRemaining"`
	YardLine      *int64   `json:"yardLine"`
}
