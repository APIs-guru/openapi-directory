package shared



type DestinationConfig struct {
    OnFailure *OnFailure `json:"OnFailure,omitempty"`
    OnSuccess *OnSuccess `json:"OnSuccess,omitempty"`
    
}

