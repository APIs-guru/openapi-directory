package shared

type DateFilter struct {
	DateRange *DateRange `json:"DateRange,omitempty"`
	End       *string    `json:"End,omitempty"`
	Start     *string    `json:"Start,omitempty"`
}
