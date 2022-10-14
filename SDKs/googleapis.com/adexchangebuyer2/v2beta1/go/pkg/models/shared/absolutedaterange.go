package shared

type AbsoluteDateRange struct {
	EndDate   *Date `json:"endDate,omitempty"`
	StartDate *Date `json:"startDate,omitempty"`
}
