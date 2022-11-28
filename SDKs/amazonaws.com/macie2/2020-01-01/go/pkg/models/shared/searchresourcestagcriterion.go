package shared

// SearchResourcesTagCriterion
// Specifies a tag-based filter condition that determines which Amazon Web Services resources are included or excluded from the query results.
type SearchResourcesTagCriterion struct {
	Comparator *SearchResourcesComparatorEnum    `json:"comparator,omitempty"`
	TagValues  []SearchResourcesTagCriterionPair `json:"tagValues,omitempty"`
}
