package shared

type SearchResourcesSimpleCriterion struct {
	Comparator *SearchResourcesComparatorEnum         `json:"comparator"`
	Key        *SearchResourcesSimpleCriterionKeyEnum `json:"key"`
	Values     []string                               `json:"values"`
}
