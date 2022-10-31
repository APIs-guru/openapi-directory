package shared



type ListFunctionsResponse struct {
    Functions []FunctionConfiguration `json:"Functions,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    
}

