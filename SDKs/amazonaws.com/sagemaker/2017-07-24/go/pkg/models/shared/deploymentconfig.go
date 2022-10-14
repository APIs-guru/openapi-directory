package shared

type DeploymentConfig struct {
	AutoRollbackConfiguration *AutoRollbackConfig   `json:"AutoRollbackConfiguration,omitempty"`
	BlueGreenUpdatePolicy     BlueGreenUpdatePolicy `json:"BlueGreenUpdatePolicy"`
}
