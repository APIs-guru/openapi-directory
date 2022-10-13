package shared

type LambdaFunctionTimedOutEventDetails struct {
	Cause *string `json:"cause"`
	Error *string `json:"error"`
}
