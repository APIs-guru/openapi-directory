package shared

type ListFunctionsByCodeSigningConfigResponse struct {
	FunctionArns []string `json:"FunctionArns"`
	NextMarker   *string  `json:"NextMarker"`
}
