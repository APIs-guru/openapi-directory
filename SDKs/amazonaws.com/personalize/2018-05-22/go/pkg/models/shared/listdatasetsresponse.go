package shared

type ListDatasetsResponse struct {
	Datasets  []DatasetSummary `json:"datasets,omitempty"`
	NextToken *string          `json:"nextToken,omitempty"`
}
