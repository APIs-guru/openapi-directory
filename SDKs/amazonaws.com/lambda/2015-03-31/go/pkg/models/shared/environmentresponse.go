package shared

type EnvironmentResponse struct {
	Error     *EnvironmentError `json:"Error,omitempty"`
	Variables map[string]string `json:"Variables,omitempty"`
}
