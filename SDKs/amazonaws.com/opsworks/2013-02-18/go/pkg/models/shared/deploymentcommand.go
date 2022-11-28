package shared

// DeploymentCommand
// Used to specify a stack or deployment command.
type DeploymentCommand struct {
	Args map[string][]string       `json:"Args,omitempty"`
	Name DeploymentCommandNameEnum `json:"Name"`
}
