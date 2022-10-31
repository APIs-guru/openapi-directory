package shared



type UpdatePhpAPcuRequest struct {
    ApcuSize *int32 `json:"apcu_size,omitempty"`
    Enabled *bool `json:"enabled,omitempty"`
    
}

