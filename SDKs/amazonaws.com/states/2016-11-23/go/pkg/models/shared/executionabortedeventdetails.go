package shared

type ExecutionAbortedEventDetails struct {
	Cause *string `json:"cause"`
	Error *string `json:"error"`
}
