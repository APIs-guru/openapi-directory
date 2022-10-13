package shared

type ListDatasetsResponse struct {
	DatasetSummaries []DatasetSummary `json:"DatasetSummaries"`
	NextToken        *string          `json:"NextToken"`
}
