package shared

// SavingsPlanFilter
// Information about a filter.
type SavingsPlanFilter struct {
	Name   *SavingsPlansFilterNameEnum `json:"name,omitempty"`
	Values []string                    `json:"values,omitempty"`
}
