package shared

type ListInstancesResponse struct {
	Instances []InstanceSummary `json:"Instances,omitempty"`
	NextToken *string           `json:"NextToken,omitempty"`
}
