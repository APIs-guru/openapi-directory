package shared

type PlayWp struct {
	Away          *string  `json:"away,omitempty"`
	AwayID        *int64   `json:"awayId,omitempty"`
	AwayScore     *int64   `json:"awayScore,omitempty"`
	Distance      *int64   `json:"distance,omitempty"`
	Down          *int64   `json:"down,omitempty"`
	GamesID       *int64   `json:"gamesId,omitempty"`
	Home          *string  `json:"home,omitempty"`
	HomeBall      *bool    `json:"homeBall,omitempty"`
	HomeID        *int64   `json:"homeId,omitempty"`
	HomeScore     *int64   `json:"homeScore,omitempty"`
	HomeWinProb   *float64 `json:"homeWinProb,omitempty"`
	PlayID        *int64   `json:"playId,omitempty"`
	PlayNumber    *int64   `json:"playNumber,omitempty"`
	PlayText      *string  `json:"playText,omitempty"`
	Spread        *float64 `json:"spread,omitempty"`
	TimeRemaining *int64   `json:"timeRemaining,omitempty"`
	YardLine      *int64   `json:"yardLine,omitempty"`
}
