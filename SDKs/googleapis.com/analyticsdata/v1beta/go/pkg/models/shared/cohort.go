package shared

// Cohort
// Defines a cohort selection criteria. A cohort is a group of users who share a common characteristic. For example, users with the same `firstSessionDate` belong to the same cohort.
type Cohort struct {
	DateRange *DateRange `json:"dateRange,omitempty"`
	Dimension *string    `json:"dimension,omitempty"`
	Name      *string    `json:"name,omitempty"`
}
