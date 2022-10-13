package shared

type SavingsPlanFilter struct {
	Name   *SavingsPlansFilterNameEnum `json:"name"`
	Values []string                    `json:"values"`
}
