package shared

// FirewallMetadata
// High-level information about a firewall, returned by operations like create and describe. You can use the information provided in the metadata to retrieve and manage a firewall.
type FirewallMetadata struct {
	FirewallArn  *string `json:"FirewallArn,omitempty"`
	FirewallName *string `json:"FirewallName,omitempty"`
}
