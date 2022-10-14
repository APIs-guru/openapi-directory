package shared

type ReturningProduction struct {
	Conference          *string  `json:"conference,omitempty"`
	PassingUsage        *float64 `json:"passingUsage,omitempty"`
	PercentPpa          *float64 `json:"percentPPA,omitempty"`
	PercentPassingPpa   *float64 `json:"percentPassingPPA,omitempty"`
	PercentReceivingPpa *float64 `json:"percentReceivingPPA,omitempty"`
	PercentRushingPpa   *float64 `json:"percentRushingPPA,omitempty"`
	ReceivingUsage      *float64 `json:"receivingUsage,omitempty"`
	RushingUsage        *float64 `json:"rushingUsage,omitempty"`
	Season              *int64   `json:"season,omitempty"`
	Team                *string  `json:"team,omitempty"`
	TotalPpa            *float64 `json:"totalPPA,omitempty"`
	TotalPassingPpa     *float64 `json:"totalPassingPPA,omitempty"`
	TotalReceivingPpa   *float64 `json:"totalReceivingPPA,omitempty"`
	TotalRushingPpa     *float64 `json:"totalRushingPPA,omitempty"`
	Usage               *float64 `json:"usage,omitempty"`
}
