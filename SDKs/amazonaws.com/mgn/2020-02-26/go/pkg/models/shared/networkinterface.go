package shared



type NetworkInterface struct {
    Ips []string `json:"ips,omitempty"`
    IsPrimary *bool `json:"isPrimary,omitempty"`
    MacAddress *string `json:"macAddress,omitempty"`
    
}

