package shared

// WorkerBlock
//
//	The WorkerBlock data structure represents a Worker who has been blocked. It has two elements: the WorkerId and the Reason for the block.
type WorkerBlock struct {
	Reason   *string `json:"Reason,omitempty"`
	WorkerID *string `json:"WorkerId,omitempty"`
}
