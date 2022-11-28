package shared

// FunctionCodeLocation
// The object for the Lambda function location.
type FunctionCodeLocation struct {
	Location       *string `json:"Location,omitempty"`
	RepositoryType *string `json:"RepositoryType,omitempty"`
}
