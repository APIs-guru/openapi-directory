package shared



type ActivitySucceededEventDetails struct {
    Output *string `json:"output,omitempty"`
    OutputDetails *HistoryEventExecutionDataDetails `json:"outputDetails,omitempty"`
    
}

