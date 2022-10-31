package shared



type StartApplicationRequest struct {
    ApplicationName string `json:"ApplicationName"`
    RunConfiguration *RunConfiguration `json:"RunConfiguration,omitempty"`
    
}

