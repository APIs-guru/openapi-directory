package shared



type VpcConfigurationUpdate struct {
    SecurityGroupIDUpdates []string `json:"SecurityGroupIdUpdates,omitempty"`
    SubnetIDUpdates []string `json:"SubnetIdUpdates,omitempty"`
    VpcConfigurationID string `json:"VpcConfigurationId"`
    
}

