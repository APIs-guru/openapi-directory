package shared

type ListRelatedItemsOutput struct {
	NextToken    *string       `json:"nextToken,omitempty"`
	RelatedItems []RelatedItem `json:"relatedItems"`
}
