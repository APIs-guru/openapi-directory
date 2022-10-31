package shared



type DeploymentCommand struct {
    Args map[string][]string `json:"Args,omitempty"`
    Name DeploymentCommandNameEnum `json:"Name"`
    
}

