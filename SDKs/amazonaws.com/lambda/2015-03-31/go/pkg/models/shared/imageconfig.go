package shared



type ImageConfig struct {
    Command []string `json:"Command,omitempty"`
    EntryPoint []string `json:"EntryPoint,omitempty"`
    WorkingDirectory *string `json:"WorkingDirectory,omitempty"`
    
}

