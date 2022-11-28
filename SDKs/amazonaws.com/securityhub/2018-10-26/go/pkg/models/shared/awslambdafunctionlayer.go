package shared

// AwsLambdaFunctionLayer
// An Lambda layer.
type AwsLambdaFunctionLayer struct {
	Arn      *string `json:"Arn,omitempty"`
	CodeSize *int64  `json:"CodeSize,omitempty"`
}
