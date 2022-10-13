package shared

type ExecutionTimedOutEventDetails struct {
	Cause *string `json:"cause"`
	Error *string `json:"error"`
}
