package shared

// ListFunctionsResponse
// A list of Lambda functions.
type ListFunctionsResponse struct {
	Functions  []FunctionConfiguration `json:"Functions,omitempty"`
	NextMarker *string                 `json:"NextMarker,omitempty"`
}
