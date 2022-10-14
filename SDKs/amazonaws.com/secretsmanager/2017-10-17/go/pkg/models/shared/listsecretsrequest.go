package shared

type ListSecretsRequest struct {
	Filters    []Filter           `json:"Filters,omitempty"`
	MaxResults *int64             `json:"MaxResults,omitempty"`
	NextToken  *string            `json:"NextToken,omitempty"`
	SortOrder  *SortOrderTypeEnum `json:"SortOrder,omitempty"`
}
