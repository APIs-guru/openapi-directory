package shared

// NetworkPolicy
// NetworkPolicy describes VM instance network configurations.
type NetworkPolicy struct {
	NetworkInterfaces []NetworkInterface `json:"networkInterfaces,omitempty"`
}
