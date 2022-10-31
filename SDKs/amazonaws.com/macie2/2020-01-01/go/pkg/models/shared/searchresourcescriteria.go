package shared

type SearchResourcesCriteria struct {
	SimpleCriterion *SearchResourcesSimpleCriterion `json:"simpleCriterion,omitempty"`
	TagCriterion    *SearchResourcesTagCriterion    `json:"tagCriterion,omitempty"`
}
