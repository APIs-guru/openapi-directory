package shared



type StateExitedEventDetails struct {
    Name string `json:"name"`
    Output *string `json:"output,omitempty"`
    OutputDetails *HistoryEventExecutionDataDetails `json:"outputDetails,omitempty"`
    
}

