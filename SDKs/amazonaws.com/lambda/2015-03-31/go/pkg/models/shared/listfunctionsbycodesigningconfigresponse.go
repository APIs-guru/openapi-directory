package shared

type ListFunctionsByCodeSigningConfigResponse struct {
	FunctionArns []string `json:"FunctionArns,omitempty"`
	NextMarker   *string  `json:"NextMarker,omitempty"`
}
