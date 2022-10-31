package shared



type ListWorkerBlocksResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    NumResults *int64 `json:"NumResults,omitempty"`
    WorkerBlocks []WorkerBlock `json:"WorkerBlocks,omitempty"`
    
}

