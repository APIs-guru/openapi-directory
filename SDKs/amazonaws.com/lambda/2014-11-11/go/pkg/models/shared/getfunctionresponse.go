package shared



type GetFunctionResponse struct {
    Code *FunctionCodeLocation `json:"Code,omitempty"`
    Configuration *FunctionConfiguration `json:"Configuration,omitempty"`
    
}

