package shared

type DescribeStackProvisioningParametersResult struct {
	AgentInstallerURL *string           `json:"AgentInstallerUrl"`
	Parameters        map[string]string `json:"Parameters"`
}
