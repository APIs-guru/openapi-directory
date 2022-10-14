package shared

type DescribeRdsDbInstancesRequest struct {
	RdsDbInstanceArns []string `json:"RdsDbInstanceArns,omitempty"`
	StackID           string   `json:"StackId"`
}
