package shared

type PlayerSeasonStat struct {
	Category   *string  `json:"category"`
	Conference *string  `json:"conference"`
	Player     *string  `json:"player"`
	PlayerID   *int64   `json:"playerId"`
	Season     *int64   `json:"season"`
	Stat       *float64 `json:"stat"`
	StatType   *string  `json:"statType"`
	Team       *string  `json:"team"`
}
