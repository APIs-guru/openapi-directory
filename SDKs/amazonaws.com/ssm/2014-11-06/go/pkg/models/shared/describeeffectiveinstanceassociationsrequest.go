package shared

type DescribeEffectiveInstanceAssociationsRequest struct {
	InstanceID string  `json:"InstanceId"`
	MaxResults *int64  `json:"MaxResults"`
	NextToken  *string `json:"NextToken"`
}
