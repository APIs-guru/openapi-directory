package shared

// JourneyExecutionMetricsResponse
// Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey, and provides information about that query.
type JourneyExecutionMetricsResponse struct {
	ApplicationID     string            `json:"ApplicationId"`
	JourneyID         string            `json:"JourneyId"`
	LastEvaluatedTime string            `json:"LastEvaluatedTime"`
	Metrics           map[string]string `json:"Metrics"`
}
