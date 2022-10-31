package shared

type DescribeStacksRequest struct {
	StackIds []string `json:"StackIds,omitempty"`
}
