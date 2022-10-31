package shared



type TaskStartFailedEventDetails struct {
    Cause *string `json:"cause,omitempty"`
    Error *string `json:"error,omitempty"`
    Resource string `json:"resource"`
    ResourceType string `json:"resourceType"`
    
}

