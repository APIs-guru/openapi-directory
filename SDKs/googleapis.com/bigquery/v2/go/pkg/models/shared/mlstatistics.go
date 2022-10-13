package shared

type MlStatistics struct {
	IterationResults []IterationResult `json:"iterationResults"`
	MaxIterations    *string           `json:"maxIterations"`
}
