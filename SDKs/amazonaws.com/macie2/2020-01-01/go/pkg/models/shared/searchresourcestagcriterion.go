package shared

type SearchResourcesTagCriterion struct {
	Comparator *SearchResourcesComparatorEnum    `json:"comparator"`
	TagValues  []SearchResourcesTagCriterionPair `json:"tagValues"`
}
