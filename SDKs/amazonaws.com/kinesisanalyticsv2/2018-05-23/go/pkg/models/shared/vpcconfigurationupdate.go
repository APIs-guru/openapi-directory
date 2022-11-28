package shared

// VpcConfigurationUpdate
// Describes updates to the VPC configuration used by the application.
type VpcConfigurationUpdate struct {
	SecurityGroupIDUpdates []string `json:"SecurityGroupIdUpdates,omitempty"`
	SubnetIDUpdates        []string `json:"SubnetIdUpdates,omitempty"`
	VpcConfigurationID     string   `json:"VpcConfigurationId"`
}
