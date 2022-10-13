package shared

type DescribeQueryDefinitionsResponse struct {
	NextToken        *string           `json:"nextToken"`
	QueryDefinitions []QueryDefinition `json:"queryDefinitions"`
}
