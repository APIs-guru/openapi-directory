package shared

type GetComplianceSummaryInput struct {
	GroupBy             []GroupByAttributeEnum `json:"GroupBy"`
	MaxResults          *int64                 `json:"MaxResults"`
	PaginationToken     *string                `json:"PaginationToken"`
	RegionFilters       []string               `json:"RegionFilters"`
	ResourceTypeFilters []string               `json:"ResourceTypeFilters"`
	TagKeyFilters       []string               `json:"TagKeyFilters"`
	TargetIDFilters     []string               `json:"TargetIdFilters"`
}
