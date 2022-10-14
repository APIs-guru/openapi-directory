package shared

type HTTPInstanceSummary struct {
	Attributes    map[string]string `json:"Attributes,omitempty"`
	HealthStatus  *HealthStatusEnum `json:"HealthStatus,omitempty"`
	InstanceID    *string           `json:"InstanceId,omitempty"`
	NamespaceName *string           `json:"NamespaceName,omitempty"`
	ServiceName   *string           `json:"ServiceName,omitempty"`
}
