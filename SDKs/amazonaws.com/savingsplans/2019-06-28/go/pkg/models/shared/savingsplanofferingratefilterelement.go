package shared

type SavingsPlanOfferingRateFilterElement struct {
	Name   *SavingsPlanRateFilterAttributeEnum `json:"name"`
	Values []string                            `json:"values"`
}
