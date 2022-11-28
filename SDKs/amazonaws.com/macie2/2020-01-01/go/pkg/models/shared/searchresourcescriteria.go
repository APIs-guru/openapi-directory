package shared

// SearchResourcesCriteria
// Specifies a property- or tag-based filter condition for including or excluding Amazon Web Services resources from the query results.
type SearchResourcesCriteria struct {
	SimpleCriterion *SearchResourcesSimpleCriterion `json:"simpleCriterion,omitempty"`
	TagCriterion    *SearchResourcesTagCriterion    `json:"tagCriterion,omitempty"`
}
