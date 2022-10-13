package shared

type EnvironmentError struct {
	ErrorCode *string `json:"ErrorCode"`
	Message   *string `json:"Message"`
}
