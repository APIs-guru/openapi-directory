package shared

type ListInstancesResponse struct {
	Instances []InstanceMetadata `json:"Instances"`
	NextToken *string            `json:"NextToken"`
}
