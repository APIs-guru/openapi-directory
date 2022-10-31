package shared

type GetSolutionMetricsResponse struct {
	Metrics            map[string]float64 `json:"metrics,omitempty"`
	SolutionVersionArn *string            `json:"solutionVersionArn,omitempty"`
}
