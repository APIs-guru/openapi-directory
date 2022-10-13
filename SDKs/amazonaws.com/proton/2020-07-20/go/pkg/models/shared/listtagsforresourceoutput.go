package shared

type ListTagsForResourceOutput struct {
	NextToken *string `json:"nextToken"`
	Tags      []Tag   `json:"tags"`
}
