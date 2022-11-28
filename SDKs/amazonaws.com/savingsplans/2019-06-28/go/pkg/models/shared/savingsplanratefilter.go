package shared

// SavingsPlanRateFilter
// Information about a filter.
type SavingsPlanRateFilter struct {
	Name   *SavingsPlanRateFilterNameEnum `json:"name,omitempty"`
	Values []string                       `json:"values,omitempty"`
}
