package shared

type DescribeAppsRequest struct {
	AppIds  []string `json:"AppIds,omitempty"`
	StackID *string  `json:"StackId,omitempty"`
}
