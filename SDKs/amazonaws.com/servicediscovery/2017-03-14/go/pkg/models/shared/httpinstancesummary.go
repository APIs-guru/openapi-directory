package shared

type HTTPInstanceSummary struct {
	Attributes    map[string]string `json:"Attributes"`
	HealthStatus  *HealthStatusEnum `json:"HealthStatus"`
	InstanceID    *string           `json:"InstanceId"`
	NamespaceName *string           `json:"NamespaceName"`
	ServiceName   *string           `json:"ServiceName"`
}
