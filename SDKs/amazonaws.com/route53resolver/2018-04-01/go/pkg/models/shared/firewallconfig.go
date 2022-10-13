package shared

type FirewallConfig struct {
	FirewallFailOpen *FirewallFailOpenStatusEnum `json:"FirewallFailOpen"`
	ID               *string                     `json:"Id"`
	OwnerID          *string                     `json:"OwnerId"`
	ResourceID       *string                     `json:"ResourceId"`
}
