package shared

type DiscoverInstancesRequest struct {
	HealthStatus       *HealthStatusFilterEnum `json:"HealthStatus,omitempty"`
	MaxResults         *int64                  `json:"MaxResults,omitempty"`
	NamespaceName      string                  `json:"NamespaceName"`
	OptionalParameters map[string]string       `json:"OptionalParameters,omitempty"`
	QueryParameters    map[string]string       `json:"QueryParameters,omitempty"`
	ServiceName        string                  `json:"ServiceName"`
}
