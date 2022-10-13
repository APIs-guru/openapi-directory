package shared

type GetFunctionResponse struct {
	Code          *FunctionCodeLocation  `json:"Code"`
	Configuration *FunctionConfiguration `json:"Configuration"`
}
