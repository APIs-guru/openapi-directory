package shared

type ReturningProduction struct {
	Conference          *string  `json:"conference"`
	PassingUsage        *float64 `json:"passingUsage"`
	PercentPpa          *float64 `json:"percentPPA"`
	PercentPassingPpa   *float64 `json:"percentPassingPPA"`
	PercentReceivingPpa *float64 `json:"percentReceivingPPA"`
	PercentRushingPpa   *float64 `json:"percentRushingPPA"`
	ReceivingUsage      *float64 `json:"receivingUsage"`
	RushingUsage        *float64 `json:"rushingUsage"`
	Season              *int64   `json:"season"`
	Team                *string  `json:"team"`
	TotalPpa            *float64 `json:"totalPPA"`
	TotalPassingPpa     *float64 `json:"totalPassingPPA"`
	TotalReceivingPpa   *float64 `json:"totalReceivingPPA"`
	TotalRushingPpa     *float64 `json:"totalRushingPPA"`
	Usage               *float64 `json:"usage"`
}
