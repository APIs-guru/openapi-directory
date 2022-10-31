package shared

type SearchResourcesSimpleCriterion struct {
	Comparator *SearchResourcesComparatorEnum         `json:"comparator,omitempty"`
	Key        *SearchResourcesSimpleCriterionKeyEnum `json:"key,omitempty"`
	Values     []string                               `json:"values,omitempty"`
}
