package shared

// AnnotationConsolidationConfig
// Configures how labels are consolidated across human workers and processes output data.
type AnnotationConsolidationConfig struct {
	AnnotationConsolidationLambdaArn string `json:"AnnotationConsolidationLambdaArn"`
}
