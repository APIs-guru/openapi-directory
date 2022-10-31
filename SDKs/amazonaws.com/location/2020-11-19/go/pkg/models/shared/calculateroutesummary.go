package shared

type CalculateRouteSummary struct {
	DataSource      string           `json:"DataSource"`
	Distance        float64          `json:"Distance"`
	DistanceUnit    DistanceUnitEnum `json:"DistanceUnit"`
	DurationSeconds float64          `json:"DurationSeconds"`
	RouteBBox       []float64        `json:"RouteBBox"`
}
