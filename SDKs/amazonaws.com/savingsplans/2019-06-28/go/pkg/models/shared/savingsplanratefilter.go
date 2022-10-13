package shared

type SavingsPlanRateFilter struct {
	Name   *SavingsPlanRateFilterNameEnum `json:"name"`
	Values []string                       `json:"values"`
}
