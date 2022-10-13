package shared

type GetSolutionMetricsResponse struct {
	Metrics            map[string]float64 `json:"metrics"`
	SolutionVersionArn *string            `json:"solutionVersionArn"`
}
