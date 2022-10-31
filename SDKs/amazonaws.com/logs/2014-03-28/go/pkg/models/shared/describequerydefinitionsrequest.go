package shared

type DescribeQueryDefinitionsRequest struct {
	MaxResults                *int64  `json:"maxResults,omitempty"`
	NextToken                 *string `json:"nextToken,omitempty"`
	QueryDefinitionNamePrefix *string `json:"queryDefinitionNamePrefix,omitempty"`
}
