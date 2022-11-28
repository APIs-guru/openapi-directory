package shared

// HTTPInstanceSummary
// In a response to a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a> request, <code>HttpInstanceSummary</code> contains information about one instance that matches the values that you specified in the request.
type HTTPInstanceSummary struct {
	Attributes    map[string]string `json:"Attributes,omitempty"`
	HealthStatus  *HealthStatusEnum `json:"HealthStatus,omitempty"`
	InstanceID    *string           `json:"InstanceId,omitempty"`
	NamespaceName *string           `json:"NamespaceName,omitempty"`
	ServiceName   *string           `json:"ServiceName,omitempty"`
}
