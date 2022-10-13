package shared

type AwsLambdaFunctionLayer struct {
	Arn      *string `json:"Arn"`
	CodeSize *int64  `json:"CodeSize"`
}
