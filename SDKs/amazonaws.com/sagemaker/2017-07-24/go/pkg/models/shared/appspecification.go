package shared



type AppSpecification struct {
    ContainerArguments []string `json:"ContainerArguments,omitempty"`
    ContainerEntrypoint []string `json:"ContainerEntrypoint,omitempty"`
    ImageURI string `json:"ImageUri"`
    
}

