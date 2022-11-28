package shared

// EnvironmentResponse
// The results of an operation to update or read environment variables. If the operation is successful, the response contains the environment variables. If it failed, the response contains details about the error.
type EnvironmentResponse struct {
	Error     *EnvironmentError `json:"Error,omitempty"`
	Variables map[string]string `json:"Variables,omitempty"`
}
