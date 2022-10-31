package shared



type VpcConfig struct {
    AssignPublicIP *bool `json:"assignPublicIp,omitempty"`
    SecurityGroups []string `json:"securityGroups,omitempty"`
    Subnets []string `json:"subnets"`
    
}

