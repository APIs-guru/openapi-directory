package shared

type ExecutionFailedEventDetails struct {
	Cause *string `json:"cause"`
	Error *string `json:"error"`
}
