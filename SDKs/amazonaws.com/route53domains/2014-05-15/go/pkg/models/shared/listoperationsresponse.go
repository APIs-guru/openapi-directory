package shared



type ListOperationsResponse struct {
    NextPageMarker *string `json:"NextPageMarker,omitempty"`
    Operations []OperationSummary `json:"Operations"`
    
}

