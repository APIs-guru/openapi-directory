package shared

type Cohort struct {
	DateRange *DateRange `json:"dateRange"`
	Dimension *string    `json:"dimension"`
	Name      *string    `json:"name"`
}
