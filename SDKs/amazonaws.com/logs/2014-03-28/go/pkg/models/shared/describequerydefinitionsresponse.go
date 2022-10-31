package shared

type DescribeQueryDefinitionsResponse struct {
	NextToken        *string           `json:"nextToken,omitempty"`
	QueryDefinitions []QueryDefinition `json:"queryDefinitions,omitempty"`
}
