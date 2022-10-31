package shared

type UserEq struct {
	HighShelf     HighShelf `json:"high_shelf"`
	LowShelf      LowShelf  `json:"low_shelf"`
	MaxPeakingEqs int32     `json:"max_peaking_eqs"`
	PeakingEqs    []string  `json:"peaking_eqs"`
}
