package shared



type GetFunctionResponse struct {
    Code *FunctionCodeLocation `json:"Code,omitempty"`
    Concurrency *Concurrency `json:"Concurrency,omitempty"`
    Configuration *FunctionConfiguration `json:"Configuration,omitempty"`
    Tags map[string]string `json:"Tags,omitempty"`
    
}

