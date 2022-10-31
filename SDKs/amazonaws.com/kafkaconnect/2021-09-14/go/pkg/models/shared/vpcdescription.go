package shared



type VpcDescription struct {
    SecurityGroups []string `json:"securityGroups,omitempty"`
    Subnets []string `json:"subnets,omitempty"`
    
}

