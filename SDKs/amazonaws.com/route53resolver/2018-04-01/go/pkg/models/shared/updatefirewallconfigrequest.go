package shared



type UpdateFirewallConfigRequest struct {
    FirewallFailOpen FirewallFailOpenStatusEnum `json:"FirewallFailOpen"`
    ResourceID string `json:"ResourceId"`
    
}

