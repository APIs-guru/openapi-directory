package shared

// JourneyExecutionActivityMetricsResponse
// Provides the results of a query that retrieved the data for a standard execution metric that applies to a journey activity, and provides information about that query.
type JourneyExecutionActivityMetricsResponse struct {
	ActivityType      string            `json:"ActivityType"`
	ApplicationID     string            `json:"ApplicationId"`
	JourneyActivityID string            `json:"JourneyActivityId"`
	JourneyID         string            `json:"JourneyId"`
	LastEvaluatedTime string            `json:"LastEvaluatedTime"`
	Metrics           map[string]string `json:"Metrics"`
}
