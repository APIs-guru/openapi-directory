package shared

// SavingsPlanOfferingRateFilterElement
// Information about a filter.
type SavingsPlanOfferingRateFilterElement struct {
	Name   *SavingsPlanRateFilterAttributeEnum `json:"name,omitempty"`
	Values []string                            `json:"values,omitempty"`
}
