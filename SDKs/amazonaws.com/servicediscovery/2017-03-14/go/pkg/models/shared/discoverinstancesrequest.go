package shared

type DiscoverInstancesRequest struct {
	HealthStatus       *HealthStatusFilterEnum `json:"HealthStatus"`
	MaxResults         *int64                  `json:"MaxResults"`
	NamespaceName      string                  `json:"NamespaceName"`
	OptionalParameters map[string]string       `json:"OptionalParameters"`
	QueryParameters    map[string]string       `json:"QueryParameters"`
	ServiceName        string                  `json:"ServiceName"`
}
