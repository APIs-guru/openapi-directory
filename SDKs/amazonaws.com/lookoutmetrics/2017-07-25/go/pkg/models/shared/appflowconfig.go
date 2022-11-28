package shared

// AppFlowConfig
// Details about an Amazon AppFlow flow datasource.
type AppFlowConfig struct {
	FlowName string `json:"FlowName"`
	RoleArn  string `json:"RoleArn"`
}
