package shared

type AwsLambdaFunctionLayer struct {
	Arn      *string `json:"Arn,omitempty"`
	CodeSize *int64  `json:"CodeSize,omitempty"`
}
