package shared

type PlayerGamePpaAveragePpa struct {
	All  *float64 `json:"all"`
	Pass *float64 `json:"pass"`
	Rush *float64 `json:"rush"`
}

type PlayerGamePpa struct {
	AveragePpa *PlayerGamePpaAveragePpa `json:"averagePPA"`
	Name       *string                  `json:"name"`
	Opponent   *string                  `json:"opponent"`
	Position   *string                  `json:"position"`
	Season     *int64                   `json:"season"`
	Team       *string                  `json:"team"`
	Week       *int64                   `json:"week"`
}
