package shared

// InstanceNetworking
// Describes monthly data transfer rates and port information for an instance.
type InstanceNetworking struct {
	MonthlyTransfer *MonthlyTransfer   `json:"monthlyTransfer,omitempty"`
	Ports           []InstancePortInfo `json:"ports,omitempty"`
}
