package shared



type BiEngineStatistics struct {
    BiEngineMode *string `json:"biEngineMode,omitempty"`
    BiEngineReasons []BiEngineReason `json:"biEngineReasons,omitempty"`
    
}

