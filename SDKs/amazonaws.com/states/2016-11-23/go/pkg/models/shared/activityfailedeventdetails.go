package shared

type ActivityFailedEventDetails struct {
	Cause *string `json:"cause"`
	Error *string `json:"error"`
}
