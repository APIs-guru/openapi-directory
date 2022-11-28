package shared

// RecordOutput
// The output for the product created as the result of a request. For example, the output for a CloudFormation-backed product that creates an S3 bucket would include the S3 bucket URL.
type RecordOutput struct {
	Description *string `json:"Description,omitempty"`
	OutputKey   *string `json:"OutputKey,omitempty"`
	OutputValue *string `json:"OutputValue,omitempty"`
}
