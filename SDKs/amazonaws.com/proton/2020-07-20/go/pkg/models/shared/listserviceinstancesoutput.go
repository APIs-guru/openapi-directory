package shared

type ListServiceInstancesOutput struct {
	NextToken        *string                  `json:"nextToken"`
	ServiceInstances []ServiceInstanceSummary `json:"serviceInstances"`
}
