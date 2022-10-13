package shared

type DescribeServiceErrorsRequest struct {
	InstanceID      *string  `json:"InstanceId"`
	ServiceErrorIds []string `json:"ServiceErrorIds"`
	StackID         *string  `json:"StackId"`
}
