package shared



type MlStatistics struct {
    IterationResults []IterationResult `json:"iterationResults,omitempty"`
    MaxIterations *string `json:"maxIterations,omitempty"`
    
}

