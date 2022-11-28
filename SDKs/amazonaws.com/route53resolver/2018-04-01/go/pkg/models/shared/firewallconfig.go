package shared

// FirewallConfig
// Configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).
type FirewallConfig struct {
	FirewallFailOpen *FirewallFailOpenStatusEnum `json:"FirewallFailOpen,omitempty"`
	ID               *string                     `json:"Id,omitempty"`
	OwnerID          *string                     `json:"OwnerId,omitempty"`
	ResourceID       *string                     `json:"ResourceId,omitempty"`
}
