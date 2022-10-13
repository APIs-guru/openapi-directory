package shared

type SearchResourcesCriteria struct {
	SimpleCriterion *SearchResourcesSimpleCriterion `json:"simpleCriterion"`
	TagCriterion    *SearchResourcesTagCriterion    `json:"tagCriterion"`
}
