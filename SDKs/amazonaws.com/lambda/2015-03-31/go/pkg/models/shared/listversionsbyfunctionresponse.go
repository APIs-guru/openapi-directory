package shared



type ListVersionsByFunctionResponse struct {
    NextMarker *string `json:"NextMarker,omitempty"`
    Versions []FunctionConfiguration `json:"Versions,omitempty"`
    
}

