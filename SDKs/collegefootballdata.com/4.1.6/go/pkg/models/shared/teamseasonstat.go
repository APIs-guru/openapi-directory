package shared

type TeamSeasonStat struct {
	Conference *string `json:"conference"`
	Season     *int64  `json:"season"`
	StatName   *string `json:"statName"`
	StatValue  *int64  `json:"statValue"`
	Team       *string `json:"team"`
}
