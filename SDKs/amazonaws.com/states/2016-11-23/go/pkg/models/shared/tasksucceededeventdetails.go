package shared



type TaskSucceededEventDetails struct {
    Output *string `json:"output,omitempty"`
    OutputDetails *HistoryEventExecutionDataDetails `json:"outputDetails,omitempty"`
    Resource string `json:"resource"`
    ResourceType string `json:"resourceType"`
    
}

