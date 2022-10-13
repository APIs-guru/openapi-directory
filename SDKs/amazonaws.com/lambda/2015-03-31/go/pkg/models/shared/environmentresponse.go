package shared

type EnvironmentResponse struct {
	Error     *EnvironmentError `json:"Error"`
	Variables map[string]string `json:"Variables"`
}
