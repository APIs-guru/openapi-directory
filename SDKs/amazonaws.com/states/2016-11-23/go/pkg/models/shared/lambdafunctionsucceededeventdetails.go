package shared



type LambdaFunctionSucceededEventDetails struct {
    Output *string `json:"output,omitempty"`
    OutputDetails *HistoryEventExecutionDataDetails `json:"outputDetails,omitempty"`
    
}

