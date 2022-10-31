package shared



type FirewallConfig struct {
    FirewallFailOpen *FirewallFailOpenStatusEnum `json:"FirewallFailOpen,omitempty"`
    ID *string `json:"Id,omitempty"`
    OwnerID *string `json:"OwnerId,omitempty"`
    ResourceID *string `json:"ResourceId,omitempty"`
    
}

