package shared

// ListFunctionsResponse
// Contains a list of AWS Lambda function configurations (see <a>API_FunctionConfiguration</a>.
type ListFunctionsResponse struct {
	Functions  []FunctionConfiguration `json:"Functions,omitempty"`
	NextMarker *string                 `json:"NextMarker,omitempty"`
}
