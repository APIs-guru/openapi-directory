package shared

type JourneyExecutionMetricsResponse struct {
	ApplicationID     string            `json:"ApplicationId"`
	JourneyID         string            `json:"JourneyId"`
	LastEvaluatedTime string            `json:"LastEvaluatedTime"`
	Metrics           map[string]string `json:"Metrics"`
}
