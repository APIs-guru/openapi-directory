package shared

type DeploymentConfig struct {
	AutoRollbackConfiguration *AutoRollbackConfig   `json:"AutoRollbackConfiguration"`
	BlueGreenUpdatePolicy     BlueGreenUpdatePolicy `json:"BlueGreenUpdatePolicy"`
}
