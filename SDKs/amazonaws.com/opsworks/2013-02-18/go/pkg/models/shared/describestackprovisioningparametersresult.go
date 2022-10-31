package shared



type DescribeStackProvisioningParametersResult struct {
    AgentInstallerURL *string `json:"AgentInstallerUrl,omitempty"`
    Parameters map[string]string `json:"Parameters,omitempty"`
    
}

