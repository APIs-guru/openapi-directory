package shared

type ActivityTimedOutEventDetails struct {
	Cause *string `json:"cause"`
	Error *string `json:"error"`
}
