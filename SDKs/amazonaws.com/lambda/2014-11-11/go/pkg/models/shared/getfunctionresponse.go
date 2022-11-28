package shared

// GetFunctionResponse
// This response contains the object for AWS Lambda function location (see <a>API_FunctionCodeLocation</a>
type GetFunctionResponse struct {
	Code          *FunctionCodeLocation  `json:"Code,omitempty"`
	Configuration *FunctionConfiguration `json:"Configuration,omitempty"`
}
