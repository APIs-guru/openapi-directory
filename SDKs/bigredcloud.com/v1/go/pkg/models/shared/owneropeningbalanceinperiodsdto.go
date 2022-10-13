package shared

type OwnerOpeningBalanceInPeriodsDto struct {
	CurrentMonth   *float64 `json:"currentMonth"`
	OneMonthOld    *float64 `json:"oneMonthOld"`
	ThreeMonthsOld *float64 `json:"threeMonthsOld"`
	TwoMonthsOld   *float64 `json:"twoMonthsOld"`
}
