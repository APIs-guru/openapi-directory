package shared

// DeploymentConfig
// Currently, the <code>DeploymentConfig</code> API is not supported.
type DeploymentConfig struct {
	AutoRollbackConfiguration *AutoRollbackConfig   `json:"AutoRollbackConfiguration,omitempty"`
	BlueGreenUpdatePolicy     BlueGreenUpdatePolicy `json:"BlueGreenUpdatePolicy"`
}
