package shared



type Recipes struct {
    Configure []string `json:"Configure,omitempty"`
    Deploy []string `json:"Deploy,omitempty"`
    Setup []string `json:"Setup,omitempty"`
    Shutdown []string `json:"Shutdown,omitempty"`
    Undeploy []string `json:"Undeploy,omitempty"`
    
}

