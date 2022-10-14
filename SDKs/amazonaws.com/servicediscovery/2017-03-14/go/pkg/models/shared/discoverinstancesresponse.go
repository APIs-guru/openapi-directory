package shared

type DiscoverInstancesResponse struct {
	Instances []HTTPInstanceSummary `json:"Instances,omitempty"`
}
