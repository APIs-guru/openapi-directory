package shared

type ListDatasetsResponse struct {
	DatasetSummaries []DatasetSummary `json:"DatasetSummaries,omitempty"`
	NextToken        *string          `json:"NextToken,omitempty"`
}
