package shared

type DescribeRdsDbInstancesRequest struct {
	RdsDbInstanceArns []string `json:"RdsDbInstanceArns"`
	StackID           string   `json:"StackId"`
}
