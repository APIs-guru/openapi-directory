package shared

type ListComplianceItemsRequest struct {
	Filters       []ComplianceStringFilter `json:"Filters"`
	MaxResults    *int64                   `json:"MaxResults"`
	NextToken     *string                  `json:"NextToken"`
	ResourceIds   []string                 `json:"ResourceIds"`
	ResourceTypes []string                 `json:"ResourceTypes"`
}
