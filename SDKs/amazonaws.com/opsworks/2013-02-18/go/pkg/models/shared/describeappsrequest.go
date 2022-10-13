package shared

type DescribeAppsRequest struct {
	AppIds  []string `json:"AppIds"`
	StackID *string  `json:"StackId"`
}
