package shared

type ListRelatedItemsOutput struct {
	NextToken    *string       `json:"nextToken"`
	RelatedItems []RelatedItem `json:"relatedItems"`
}
