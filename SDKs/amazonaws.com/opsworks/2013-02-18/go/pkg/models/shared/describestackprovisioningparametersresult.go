package shared

// DescribeStackProvisioningParametersResult
// Contains the response to a <code>DescribeStackProvisioningParameters</code> request.
type DescribeStackProvisioningParametersResult struct {
	AgentInstallerURL *string           `json:"AgentInstallerUrl,omitempty"`
	Parameters        map[string]string `json:"Parameters,omitempty"`
}
