package shared



type ListFunctionEventInvokeConfigsResponse struct {
    FunctionEventInvokeConfigs []FunctionEventInvokeConfig `json:"FunctionEventInvokeConfigs,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    
}

