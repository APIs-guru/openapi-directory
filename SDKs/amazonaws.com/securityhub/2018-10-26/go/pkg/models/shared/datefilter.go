package shared

type DateFilter struct {
	DateRange *DateRange `json:"DateRange"`
	End       *string    `json:"End"`
	Start     *string    `json:"Start"`
}
