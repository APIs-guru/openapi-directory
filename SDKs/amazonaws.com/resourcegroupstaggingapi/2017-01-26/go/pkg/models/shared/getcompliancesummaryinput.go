package shared



type GetComplianceSummaryInput struct {
    GroupBy []GroupByAttributeEnum `json:"GroupBy,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    PaginationToken *string `json:"PaginationToken,omitempty"`
    RegionFilters []string `json:"RegionFilters,omitempty"`
    ResourceTypeFilters []string `json:"ResourceTypeFilters,omitempty"`
    TagKeyFilters []string `json:"TagKeyFilters,omitempty"`
    TargetIDFilters []string `json:"TargetIdFilters,omitempty"`
    
}

