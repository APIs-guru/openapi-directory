package shared

type BigQueryModelTraining struct {
	CurrentIteration        *int32  `json:"currentIteration"`
	ExpectedTotalIterations *string `json:"expectedTotalIterations"`
}
