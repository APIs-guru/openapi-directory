package shared

type DescribeParametersRequest struct {
	Filters          []ParametersFilter      `json:"Filters"`
	MaxResults       *int64                  `json:"MaxResults"`
	NextToken        *string                 `json:"NextToken"`
	ParameterFilters []ParameterStringFilter `json:"ParameterFilters"`
}
