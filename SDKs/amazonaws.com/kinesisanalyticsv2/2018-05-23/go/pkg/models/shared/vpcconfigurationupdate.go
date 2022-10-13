package shared

type VpcConfigurationUpdate struct {
	SecurityGroupIDUpdates []string `json:"SecurityGroupIdUpdates"`
	SubnetIDUpdates        []string `json:"SubnetIdUpdates"`
	VpcConfigurationID     string   `json:"VpcConfigurationId"`
}
