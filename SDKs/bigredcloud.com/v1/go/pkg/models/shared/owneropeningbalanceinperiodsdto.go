package shared

type OwnerOpeningBalanceInPeriodsDto struct {
	CurrentMonth   *float64 `json:"currentMonth,omitempty"`
	OneMonthOld    *float64 `json:"oneMonthOld,omitempty"`
	ThreeMonthsOld *float64 `json:"threeMonthsOld,omitempty"`
	TwoMonthsOld   *float64 `json:"twoMonthsOld,omitempty"`
}
