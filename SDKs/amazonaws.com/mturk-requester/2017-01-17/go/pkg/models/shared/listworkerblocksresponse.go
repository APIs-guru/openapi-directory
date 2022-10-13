package shared

type ListWorkerBlocksResponse struct {
	NextToken    *string       `json:"NextToken"`
	NumResults   *int64        `json:"NumResults"`
	WorkerBlocks []WorkerBlock `json:"WorkerBlocks"`
}
