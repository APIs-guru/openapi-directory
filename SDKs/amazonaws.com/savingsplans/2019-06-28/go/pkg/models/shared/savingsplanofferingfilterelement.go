package shared

// SavingsPlanOfferingFilterElement
// Information about a filter.
type SavingsPlanOfferingFilterElement struct {
	Name   *SavingsPlanOfferingFilterAttributeEnum `json:"name,omitempty"`
	Values []string                                `json:"values,omitempty"`
}
