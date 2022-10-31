package shared



type JourneyExecutionActivityMetricsResponse struct {
    ActivityType string `json:"ActivityType"`
    ApplicationID string `json:"ApplicationId"`
    JourneyActivityID string `json:"JourneyActivityId"`
    JourneyID string `json:"JourneyId"`
    LastEvaluatedTime string `json:"LastEvaluatedTime"`
    Metrics map[string]string `json:"Metrics"`
    
}

