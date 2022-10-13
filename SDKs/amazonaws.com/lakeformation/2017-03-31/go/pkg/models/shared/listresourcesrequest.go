package shared

type ListResourcesRequest struct {
	FilterConditionList []FilterCondition `json:"FilterConditionList"`
	MaxResults          *int64            `json:"MaxResults"`
	NextToken           *string           `json:"NextToken"`
}
