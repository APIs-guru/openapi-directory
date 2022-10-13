package shared

type ListFunctionEventInvokeConfigsResponse struct {
	FunctionEventInvokeConfigs []FunctionEventInvokeConfig `json:"FunctionEventInvokeConfigs"`
	NextMarker                 *string                     `json:"NextMarker"`
}
