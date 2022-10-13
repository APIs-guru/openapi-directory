package shared

type ListDatasetGroupsResponse struct {
	DatasetGroups []DatasetGroupSummary `json:"datasetGroups"`
	NextToken     *string               `json:"nextToken"`
}
