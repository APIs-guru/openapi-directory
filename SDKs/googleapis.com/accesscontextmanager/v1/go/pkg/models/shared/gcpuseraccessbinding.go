package shared



type GcpUserAccessBinding struct {
    AccessLevels []string `json:"accessLevels,omitempty"`
    GroupKey *string `json:"groupKey,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

