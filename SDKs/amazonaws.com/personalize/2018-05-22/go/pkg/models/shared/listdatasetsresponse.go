package shared

type ListDatasetsResponse struct {
	Datasets  []DatasetSummary `json:"datasets"`
	NextToken *string          `json:"nextToken"`
}
