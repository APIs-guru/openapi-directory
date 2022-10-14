package shared

type ListInstancesResponse struct {
	Instances []InstanceMetadata `json:"Instances,omitempty"`
	NextToken *string            `json:"NextToken,omitempty"`
}
