package shared

type GetFunctionResponse struct {
	Code          *FunctionCodeLocation  `json:"Code"`
	Concurrency   *Concurrency           `json:"Concurrency"`
	Configuration *FunctionConfiguration `json:"Configuration"`
	Tags          map[string]string      `json:"Tags"`
}
