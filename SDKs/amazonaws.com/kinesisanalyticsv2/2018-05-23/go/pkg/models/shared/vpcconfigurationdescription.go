package shared



type VpcConfigurationDescription struct {
    SecurityGroupIds []string `json:"SecurityGroupIds"`
    SubnetIds []string `json:"SubnetIds"`
    VpcConfigurationID string `json:"VpcConfigurationId"`
    VpcID string `json:"VpcId"`
    
}

