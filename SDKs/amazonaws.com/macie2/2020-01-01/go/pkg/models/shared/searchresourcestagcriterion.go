package shared

type SearchResourcesTagCriterion struct {
	Comparator *SearchResourcesComparatorEnum    `json:"comparator,omitempty"`
	TagValues  []SearchResourcesTagCriterionPair `json:"tagValues,omitempty"`
}
