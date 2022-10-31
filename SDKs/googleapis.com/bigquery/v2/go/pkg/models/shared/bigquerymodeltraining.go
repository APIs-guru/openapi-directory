package shared



type BigQueryModelTraining struct {
    CurrentIteration *int32 `json:"currentIteration,omitempty"`
    ExpectedTotalIterations *string `json:"expectedTotalIterations,omitempty"`
    
}

