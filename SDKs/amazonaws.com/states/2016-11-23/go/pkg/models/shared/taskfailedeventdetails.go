package shared

type TaskFailedEventDetails struct {
	Cause        *string `json:"cause"`
	Error        *string `json:"error"`
	Resource     string  `json:"resource"`
	ResourceType string  `json:"resourceType"`
}
