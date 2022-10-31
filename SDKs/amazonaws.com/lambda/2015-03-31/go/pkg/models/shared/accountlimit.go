package shared



type AccountLimit struct {
    CodeSizeUnzipped *int64 `json:"CodeSizeUnzipped,omitempty"`
    CodeSizeZipped *int64 `json:"CodeSizeZipped,omitempty"`
    ConcurrentExecutions *int64 `json:"ConcurrentExecutions,omitempty"`
    TotalCodeSize *int64 `json:"TotalCodeSize,omitempty"`
    UnreservedConcurrentExecutions *int64 `json:"UnreservedConcurrentExecutions,omitempty"`
    
}

