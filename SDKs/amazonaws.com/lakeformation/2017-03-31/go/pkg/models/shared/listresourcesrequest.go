package shared

type ListResourcesRequest struct {
	FilterConditionList []FilterCondition `json:"FilterConditionList,omitempty"`
	MaxResults          *int64            `json:"MaxResults,omitempty"`
	NextToken           *string           `json:"NextToken,omitempty"`
}
