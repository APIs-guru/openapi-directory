package shared

type SavingsPlanFilter struct {
	Name   *SavingsPlansFilterNameEnum `json:"name,omitempty"`
	Values []string                    `json:"values,omitempty"`
}
