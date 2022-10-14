package shared

type SavingsPlanRateFilter struct {
	Name   *SavingsPlanRateFilterNameEnum `json:"name,omitempty"`
	Values []string                       `json:"values,omitempty"`
}
