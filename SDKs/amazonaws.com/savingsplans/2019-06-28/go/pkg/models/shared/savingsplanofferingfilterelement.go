package shared

type SavingsPlanOfferingFilterElement struct {
	Name   *SavingsPlanOfferingFilterAttributeEnum `json:"name,omitempty"`
	Values []string                                `json:"values,omitempty"`
}
