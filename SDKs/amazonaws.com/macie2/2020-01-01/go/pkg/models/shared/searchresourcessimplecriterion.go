package shared

// SearchResourcesSimpleCriterion
// Specifies a property-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.
type SearchResourcesSimpleCriterion struct {
	Comparator *SearchResourcesComparatorEnum         `json:"comparator,omitempty"`
	Key        *SearchResourcesSimpleCriterionKeyEnum `json:"key,omitempty"`
	Values     []string                               `json:"values,omitempty"`
}
