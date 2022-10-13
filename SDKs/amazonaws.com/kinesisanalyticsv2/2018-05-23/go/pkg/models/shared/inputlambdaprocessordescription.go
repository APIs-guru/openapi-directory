package shared

type InputLambdaProcessorDescription struct {
	ResourceArn string  `json:"ResourceARN"`
	RoleArn     *string `json:"RoleARN"`
}
