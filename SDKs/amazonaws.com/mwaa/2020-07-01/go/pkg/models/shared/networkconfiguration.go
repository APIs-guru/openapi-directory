package shared



type NetworkConfiguration struct {
    SecurityGroupIds []string `json:"SecurityGroupIds,omitempty"`
    SubnetIds []string `json:"SubnetIds,omitempty"`
    
}

