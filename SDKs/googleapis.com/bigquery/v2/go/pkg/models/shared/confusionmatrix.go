package shared



type ConfusionMatrix struct {
    ConfidenceThreshold *float64 `json:"confidenceThreshold,omitempty"`
    Rows []Row `json:"rows,omitempty"`
    
}

