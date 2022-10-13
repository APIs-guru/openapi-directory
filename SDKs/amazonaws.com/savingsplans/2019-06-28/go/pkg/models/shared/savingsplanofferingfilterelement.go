package shared

type SavingsPlanOfferingFilterElement struct {
	Name   *SavingsPlanOfferingFilterAttributeEnum `json:"name"`
	Values []string                                `json:"values"`
}
