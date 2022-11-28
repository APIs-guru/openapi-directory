package shared

// InputParallelismUpdate
// Provides updates to the parallelism count.
type InputParallelismUpdate struct {
	CountUpdate *int64 `json:"CountUpdate,omitempty"`
}
