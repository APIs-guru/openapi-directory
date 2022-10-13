package shared

type ListSecretsRequest struct {
	Filters    []Filter           `json:"Filters"`
	MaxResults *int64             `json:"MaxResults"`
	NextToken  *string            `json:"NextToken"`
	SortOrder  *SortOrderTypeEnum `json:"SortOrder"`
}
