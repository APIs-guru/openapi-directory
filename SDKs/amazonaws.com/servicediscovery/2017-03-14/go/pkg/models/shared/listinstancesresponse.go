package shared

type ListInstancesResponse struct {
	Instances []InstanceSummary `json:"Instances"`
	NextToken *string           `json:"NextToken"`
}
