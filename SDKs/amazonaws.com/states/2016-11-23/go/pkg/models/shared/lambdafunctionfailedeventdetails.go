package shared

type LambdaFunctionFailedEventDetails struct {
	Cause *string `json:"cause"`
	Error *string `json:"error"`
}
