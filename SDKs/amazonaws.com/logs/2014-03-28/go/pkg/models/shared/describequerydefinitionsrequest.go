package shared

type DescribeQueryDefinitionsRequest struct {
	MaxResults                *int64  `json:"maxResults"`
	NextToken                 *string `json:"nextToken"`
	QueryDefinitionNamePrefix *string `json:"queryDefinitionNamePrefix"`
}
